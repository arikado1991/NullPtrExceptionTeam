#pragma strict
var bg:Texture;
function Awake(){
		
	this.GetComponent(GUITexture).texture = bg;
	this.GetComponent(RollingScript).texts = [
	"Hurry Rufus, this place is unstable.",
	"You really want to know?",
	"You see, I can't say that I died!",
	"The version of me in the real world did...",
	"I am just an image created by your consciousness...",
	"Your conscious is getting weaker and hence, so is mine.",
	"Anyhow, we are almost there.",
	"That? It's noth ... No Rufus! Don't go that way!",""
	];
// ads
}
function LoadScene()
{
	Application.LoadLevel("Level 7");

}