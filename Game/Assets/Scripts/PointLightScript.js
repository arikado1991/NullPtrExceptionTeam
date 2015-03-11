#pragma strict
var time: float;
var lit: int;
function Start () {
	time = 0;
}

function Update () {
	time += Time.deltaTime;
	if (time > 1) 
		if(Random.Range(1,100) <= 3){
			lit = (lit + 1)%2;
			(GetComponent(Light)).intensity = (lit)*6;
			time = 0;
		}
}