const express = require('express')
const router = express.Router()
const validar = require('../validations.js')
const db = require('../database.js')
const response_view = require('../lib/response_view.js') 
router.get('/', (req,res)=>{
	res.send('No hay ruta disponible.')
})


module.exports = router

