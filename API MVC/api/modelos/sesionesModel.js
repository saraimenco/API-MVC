var sesionesModel = {}
var datos = [];
sesionesModel.registro = function(post,callback){
    datos.push({name:post.nombre, lname:post.apellido, email:post.email, password:post.password})
    return callback (datos)
}

module.exports.sesionesModel = sesionesModel