#pragma strict
var NormalView: Vector3;
var TopView: Vector3;
var Origin: Vector3;
var isShaking: boolean;
function Awake(){
	NormalView = Vector3(-.5, 4, -3);
	TopView =  Vector3(-.5, 4, 0);
	Origin = Vector3(-.5, 4, -3);
}

function rotate(deg: float){
	for(var i: int = 0; i < 10; i++){
				transform.RotateAround(transform.position, Vector3.left,deg/10);
				yield WaitForSeconds(0.02);//yield WaitForSeconds(0.1);
		}
}
function SwitchView( top:boolean){
	var dir: Vector3;
	var i: int;
	var time: float= .3;
	var startTime:float = Time.time;
	if (top && Origin != TopView){
		
		dir = TopView  - Origin;
	
		StartCoroutine(rotate(-45));
		for(i = 0; i < 10; i++){
				transform.localPosition += dir*.1;
				yield WaitForSeconds(0.01);
		}
		Origin = TopView;
	}
	else if (!top && Origin != NormalView){

		dir= NormalView  - Origin;
		StartCoroutine(rotate(45));
		for(i = 0; i < 10; i++){
				transform.localPosition += dir*.1;
				yield WaitForSeconds(0.01);
		}
		Origin = NormalView;
	}
	transform.localPosition = Origin;
}


function rotateX(pos:Vector3)
{
	Stabilize();
	transform.RotateAround(pos, Vector3.up,2);
}


function Shake(){
	isShaking = true;
}

function Stabilize(){
	isShaking = false;
	transform.localPosition = Origin;
}

function Update(){
	if (isShaking){
		transform.localPosition =  Origin+ Vector3(
		Random.Range(0,10)/100.0,Random.Range(0,10)/100.0,Random.Range(0,10)/100.0);
	}
}