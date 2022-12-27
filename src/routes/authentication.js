const express = require('express')
const router = express.Router()
const validar = require('../validations.js')
const response_view = require('../lib/response_view.js')
const passport = require('passport')
const {isLoggedIn} = require('../lib/auth.js')

router.get('/login', (req, res)=>{
	res.render('./login.html')
})

router.get('/registro',(req, res) =>{
	res.render('./registro.html')
})
router.post('/registro', passport.authenticate('local.signup',{
		successRedirect: '/estudiante',
		failureRedirect: '/registro'
}))
router.post('/login', passport.authenticate('local.login',{
	successRedirect:'/factura',
	failureRedirect: '/login'
}))
router.get('/estudiante', isLoggedIn,(req, res, next)=>{
	res.send(response_view(`<h2> El usuario ${req.user.nombre} ${req.user.apellidos}  ha sido insertado de manera exitosa</h2>`))
})

router.get('/factura',isLoggedIn,(req, res, next)=>{
	console.log(req.user)
	res.send(response_view(`
		<h2>Usuario:</h2>
		<p>Matricula: ${req.user.matricula}</p>
		<p>Nombre: ${req.user.nombre}</p>
		<p>Apellido: ${req.user.apellidos}</p>
		<p>Correo: ${req.user.correo}</p>
		`))
})
router.route('/logout')
    .get((req, res, next) => {
        req.session.destroy(function(err) {
            return res.redirect(302, '/login');
        })
 });
module.exports = router