var query = window.location.search.substring(1);
var vars = query.split("&");
var nombre=vars[0].split("=");
var titulo=document.getElementById("bienvenido");
titulo.innerHTML="Bienvenido &nbsp"+nombre[1];
var boton=document.getElementById("button");
boton.addEventListener("click",factorial);

function factorial(){
  var tabla=document.getElementById("tabla");
  var num=document.getElementById("numero");
  var codigo='<table border="1px"><tr><td>Iteración</td><td>Expresión</td><td>Valor</td></tr>';
  var exp_anterior;
  alert(num.value);
  var resultado;
  for(var i=1;i<=num.value;i++){
    if(i==1){
      exp_anterior="1*1";
      resultado=1;
    }else{
      exp_anterior+="*"+i;
      resultado*=i;
    }
    codigo+="<tr><td>"+i+"</td><td>"+exp_anterior+"</td><td>"+resultado+"</td></tr>";
  }
  codigo+="</table>";
  tabla.innerHTML=codigo;
}
