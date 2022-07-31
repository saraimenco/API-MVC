var sesionesModel = require('../modelos/sesionesModel').sesionesModel

var sesionesController = {}

sesionesController.iniciarsesion = function(request,response){

    var email = request.body.email
    var password = request.body.password
    console.log(email)
    console.log(password)

   

   if(email == undefined || email == null || email == ''){
       response.json({state:false, mensaje:"Dato email es obligatorio"})
       return false;
   }

   if(password == undefined || password == null || password == ''){
       response.json({state:false, mensaje:"Dato Password es obligatorio"})
       return false;
   }

   if(password.length < 8){
       response.json({state:false, mensaje:"El Password debe tener mínimo 8 caracteres"})
       return false;

   }
   response.json({mensaje:'sesión iniciada correctamente'})
   
  
}

sesionesController.registro = function(request,response){

    var name = request.body.name
    var lname = request.body.lname
    var email = request.body.email
    var password = request.body.password
    var confirmar= request.body.confirmar
   console.log(name)
   console.log(lname)
   console.log(email)
   console.log(password)
   
   if(name == undefined || name == null || name == ''){
       response.json({state:false, mensaje:"Dato nombre es obligatorio"})
       return false;
   }
   if(name.length <=2){
       response.json({state:false, mensaje:"El campo nombre debe ser superior a 2 caracteres"})
       return false;

   }
   if(name.length >=30){
       response.json({state:false, mensaje:"El campo nombre debe ser inferior a 30 caracteres"})
       return false;

   }
   if(lname == undefined || lname == null || lname == ''){
       response.json({state:false, mensaje:"Dato Apellido es obligatorio"})
       return false;
   }
   if(lname.length <=2){
       response.json({state:false, mensaje:"El campo Apellido debe ser superior a 2 caracteres"})
       return false;

   }
   if(lname.length >=30){
       response.json({state:false, mensaje:"El campo Apellido debe ser inferior a 30 caracteres"})
       return false;

   }
   if(email == undefined || email == null || email == ''){
       response.json({state:false, mensaje:"Dato Email es obligatorio"})
       return false;
   }
   if(password == undefined || password == null || password == ''){
    response.json({state:false, mensaje:"Dato Password es obligatorio"})
    return false;
    }
    if(password.length <6){
        response.json({state:false, mensaje:"El Password debe ser superior a 6 caracteres"})
        return false;
 
    }
    if(confirmar == undefined || confirmar == null || confirmar == ''){
        response.json({state:false, mensaje:"Debe confirmar el password"})
        return false;
    }
    if(confirmar != password){
        response.json({state:false, mensaje:"El Password no coincide con la confirmación"})
        return false;

   
   var post = {
    nombre:name,
    apellido: lname,
    direccion: address,
    email: email,
    password:password
   }
   sesionesModel.registro(post, function(resultado){
    //response.json(resultado)
    response.json({mensaje:'Bienvenido '+ name + ' '+ lname})
   })
   
  
    }
    response.json({mensaje:'Bienvenido '+name+' '+lname})

}



module.exports.sesionesController = sesionesController