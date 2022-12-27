const validarUsuarios = (data)=>{
	const {matricula, password} = data

	if(typeof matricula !== 'string'){
		return true
	}
	else if(matricula.length !== 9){
		return true
	}
	else if(typeof password !== 'string'){
		return true
	}else
		return false

}
module.exports= {validarUsuarios}