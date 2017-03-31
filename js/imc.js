function calcularIMC ()
{
	var peso = document.getElementById("peso").value;
	var estatura = document.getElementById("estatura").value;

	peso = (peso * 0.453592); //Convierto el peso a kilogramos
	estatura = (estatura / 100); //Convierto los centimetros a metros

	var imc = (peso/(estatura*estatura)).toFixed(2);

	//Validar para que no dejen campos vacío del formulario.
	if (isNaN(imc) || imc == "Infinity" || imc == 0)
	{
		document.getElementById("resultado").innerHTML = "Digite Peso y Estatura";
	}
	else{

	//Escribir el valor obtenido del imc.
	document.getElementById("resultado").innerHTML = imc;
	
	//Para mostrar imágenes dependiendo del resultado del IMC.
	var parent = document.getElementById("representacion");
	var child = document.getElementById("imagenIMC");
	var imagen = document.createElement("img");
	imagen.setAttribute("id", "imagenIMC");

	if (imc >= 40)
	{
	imagen.setAttribute("src", "imagenes/gradoIII.png");
	parent.replaceChild(imagen,child);
	}
	else if (imc >=30 && imc <= 39.9)
	{
	imagen.setAttribute("src", "imagenes/gradoII.png");
	parent.replaceChild(imagen,child);
	}
	else if (imc >=27 && imc <=29.9)
	{
	imagen.setAttribute("src", "imagenes/gradoI.png");
	parent.replaceChild(imagen,child);
	}
	else if (imc >=25 && imc <=26.9)
	{
	imagen.setAttribute("src", "imagenes/sobrepeso.png");
	parent.replaceChild(imagen,child);
	}
	else if (imc >=18 && imc <=24.9)
	{
	imagen.setAttribute("src", "imagenes/normal.png");
	parent.replaceChild(imagen,child);
	}
	else if (imc >=0 && imc <=17.9)
	{
	imagen.setAttribute("src", "imagenes/bajo.png");
	parent.replaceChild(imagen,child);
	}


	//Para mostrar las notificaciones.
	Notification.requestPermission();

	var nombres = document.getElementById("nombres").value;
	var apellidos = document.getElementById("apellidos").value;
	var sexo = document.getElementById("sexo").value;
	var icono = '';
	var mensaje = '';

	if (sexo == 1)
	{
		icono = 'imagenes/woman.png';
		mensaje = 'Hola '+nombres+' '+apellidos+' su índice es de: '+imc;
	}
	else 
	{
		icono = 'imagenes/man.png';
		mensaje = 'Hola '+nombres+' '+apellidos+' su índice es de: '+imc;
	}

	var title = 'ÍNDICE DE MASA CORPORAL';
	var extra = {
		icon:icono,
		body:mensaje + ". Si quieres consejos toca este mensaje	"
	}
	
	var notification = new Notification(title,extra);
	setTimeout(function(){ notification.close()},5000);
	
	}//Fin del else isNaN(imc)

	notification.onclick = function()
	{
		if (sexo == 1)
		{
			window.open('#','_blank');
		}
		else 
		{
			window.open('#','_blank');
		}
	}//Fin de notification.onclick = function()

}//Fin de la función