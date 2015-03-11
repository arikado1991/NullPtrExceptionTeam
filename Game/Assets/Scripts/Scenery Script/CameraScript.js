#pragma strict
var NormalView: Vector3;
var TopView: Vector3;
var Origin: Vector3;
var isShaking: boolean;
function Awake(){
	NormalView = Vector3(-.5, 4, -5);
	TopView =  Vector3(-.5, 4, 0);
	Origin = Vector3(-.5, 4, -5);
}
function SwitchView( top:boolean){
	if (top && Origin != TopView){
		Origin = TopView;
		transform.localPosition = TopView;
		transform.RotateAround(Vector3.left, -45);
	}
	else if (Origin != NormalView){
		Origin = NormalView;
		transform.localPosition = NormalView;
		transform.RotateAround(Vector3.left, 45);
	}
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
		Random.Range(0,20)/100.0,Random.Range(0,20)/100.0,Random.Range(0,20)/100.0);
	}
}