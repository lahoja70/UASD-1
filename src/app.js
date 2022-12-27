const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')
const engine = require('consolidate')
const passport = require('passport')
const sign_estudiante = require('./lib/loggin_estudiante.js')
const session = require('express-session')
const MySqlStore = require('express-mysql-session')(session)
const connection = require('./database.js')
const mysql = require('mysql2')


const setup = ()=>{
	let app = express()
	const {database} = require('./keys.js')
	require('./lib/loggin_estudiante.js')
	sessionStore = new MySqlStore(database)
	//View
	app.use(express.static(path.join(__dirname,'public')))
	app.set('views', __dirname + '/views');
	app.engine('html', engine.mustache);
	app.set('view engine', 'html');
	app.use(express.static('public'))
	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({extended: true}))
	
	//sesion
	app.use(session({
		secret: 'proyecto_lab_3_session',
		resave: false,
		saveUninitialized: false,
		store: sessionStore
	}))
	app.use(passport.initialize())
	app.use(passport.session())
	

	//rutas
	app.use('/', require('./routes/links.js'))
	app.use('/', require('./routes/authentication.js'))

	return app
}
module.exports = setup
//100778844
//1234