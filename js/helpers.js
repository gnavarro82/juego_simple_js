//funciones que se usaran en el programa
let getRandomNumber = size =>{
	return Math.floor(Math.random()*size);
}

let getDistance = (e, target) =>{
	//diferncia de las longitudes
	let diffx = e.offsetX - target.x;
	let diffy = e.offsetY - target.y;

	return Math.sqrt((diffx*diffx)+(diffy*diffy))
}



let getDistancePista = distance =>{
	if(distance < 30){
		return "Esta Hirviendo";
	}else if(distance <40){
		return "Muy Caliente";
	}else if(distance <60){
		return "Caliente";
	}else if(distance < 100){
		return "Calido";
	}else if(distance < 180){
		return "Frio";
	}else if(distance < 360){
		return "Muy Frio";
	}else{
		return "Congelamiento Total";
	} 

}