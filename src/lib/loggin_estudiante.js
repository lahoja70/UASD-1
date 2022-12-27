const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const db = require('../database.js')
const helper = 	require('../lib/helper.js')


passport.use('local.signup', new LocalStrategy({
	usernameField: 'matricula',
	passwordField: 'password',
	passReqToCallback: true
},async (req, matricula, password, done)=>{
	const {nombre, apellidos, correo, carrera, postgrado} = req.body
	const estudiante = {
		matricula,
		password,
		nombre,
		apellidos,
		correo,
		carrera
	}
	estudiante.password = await helper.encryptPassword(password)
	const result = await db.query('insert into estudiantes set ?;',[estudiante])
	return done(null, estudiante)
}))
passport.use('local.login', new LocalStrategy({
	usernameField: 'matricula',
	passwordField: 'password',
	passReqToCallback: true
}, async (req, matricula, password, done)=>{
	rows = await db.query('SELECT * FROM estudiantes WHERE matricula = ?',[matricula])
	if(rows.length > 0){
		const est = rows[0]
		const validPassword = await helper.matchPassword(password, est.password)
		if(validPassword)
			return done(null,est)
		else
			done(null,false)
	}
	else
		done(null,false)
}))
passport.serializeUser((usr, done)=>{
	done(null,usr.matricula)
})
passport.deserializeUser(async(id, done)=>{
	const rows = await db.query('SELECT * FROM estudiantes WHERE matricula = ?',[id])
	done(null, rows[0])
})
