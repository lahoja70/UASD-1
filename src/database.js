const sql = require('mysql2')
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
const {promisify} = require('util')
const {database} = require('./keys.js')



var conexion = sql.createPool(database)	

conexion.getConnection((error,conection)=>{
	console.log('process...')
	if(error)
		throw error
	if(conection)
		conection.release()
	console.log('BASE DE DATOS CONECTADA')
})

conexion.query = promisify(conexion.query)
var sessionStore = new MySQLStore({}, conexion)

module.exports = conexion