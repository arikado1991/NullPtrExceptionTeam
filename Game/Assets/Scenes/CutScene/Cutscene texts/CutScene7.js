#pragma strict
var bg:Texture;
function Awake(){
		
	this.GetComponent(GUITexture).texture = bg;
	this.GetComponent(RollingScript).texts = [
	"<sign> I guess it really doesn't matter...",
	"Well it's been too long to matter anyway.",
	"You want to know how did I ?",
	"I don't really want to relive that, not that I really can ...",
	"Let's focus on getting you out of here first.",
	"Your time is almost up.",
	"You need to hurry before your real body ceases to function properly",
	"Follow me! I know a shortcut...",
	"... but we need to go through my consicousness ...", ""
	];

}
function LoadScene()
{
	Application.LoadLevel("Level 7");

}