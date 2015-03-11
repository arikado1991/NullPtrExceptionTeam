#pragma strict

var anim: Animator;
var walk: boolean;
var jump: boolean;
function Walk(){ walk = true; }
function Stop(){ walk = false; jump = false;}
function Jump(){ jump = true;}

function Start(){
	anim = GetComponent("Animator");
}

function Update(){
	anim.SetBool("Jump", jump);
	anim.SetBool("Walk", walk);
}