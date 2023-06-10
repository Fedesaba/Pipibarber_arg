function iniciarMap(){
  var coord = {lat:-34.5 ,lng: -58.68333};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 10,
    center: coord
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map
  });
}

const nombre= document.getElementById("Nombre")
const telefono= document.getElementById("Telefono")
const gmail= document.getElementById("gmail")
const boton= document.getElementById("boton");
const resultado=document.querySelector(".resultado");


boton.addEventListener("click",(e)=>{
		e.preventDefault();
		let error = validarCampos();
		if(error[0]) {
			resultado.innerHTML = error[1];
			resultado.classList.add("red");
		} else {
			resultado.innerHTML = " Solicitud enviada ";
			resultado.classListt.add("green");
			resultado.classList.remove("red");
		}

	})

const validarCampos = ()=>{
	let error = [];
	if(nombre.value.length < 5 || nombre.value.length > 40){
		error[0] = true;
		error[1] = "El nombre es invalido";
        return error;	
	}
	else if (telefono.value.length  < 4 || telefono.value.length  > 11){
		error[0] = true;
		error[1] = "El telefono es invalido";
        return error;	
	}
	else if (gmail.value.length < 5 ||
		     gmail.value.length > 40 ||
		     gmail.value.indexOf("@") === -1 ||
		     gmail.value.indexOf(".") === -1){
		error[0] = true;
		error[1]= "El email es invalido";
        return error;	
	}

	error[0] = false;
	return error;
}