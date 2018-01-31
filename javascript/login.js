var formulario=document.getElementById("formulario");

function validar(e){
  var errorNombre=document.getElementById("errorNombre");
  var errorPassword=document.getElementById("errorPassword");
  var nombre=document.getElementById("nombre");
  var pass=document.getElementById("password");
  if(nombre.value!="admin"){
    errorNombre.innerHTML="Nombre de usuario incorrecto";
    e.preventDefault();
  }else{
    errorNombre.innerHTML="";
  }
  if(pass.value!="admin"){
    errorPassword.innerHTML="contraseña incorrecta";
    e.preventDefault();
  }else{
    errorPassword.innerHTML="";
  }
}

formulario.addEventListener('submit',validar);
