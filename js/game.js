const WIDTH = 400;
const HEIGH = 400;

let target = {
	x: getRandomNumber(WIDTH),
	y: getRandomNumber(HEIGH)
};

let $map = document.getElementById("map");
let $distance = document.getElementById("distance");
let cliks = 0;
//se activa el evento listener
$map.addEventListener('click', function(e){
	//aqui se ejecuta el juego
	cliks++;
	let distance = getDistance(e, target);
	let distanciaPista = getDistancePista(distance);
	$distance.innerHTML=`<h1>${distanciaPista}</h1>`;
	//console.log(distanciaPista);
	
	if(distance < 20){
		alert(`Felicidades Haz encontrado el Tesoro en : ${cliks} clicks`);
		location.reload();

	}
});



