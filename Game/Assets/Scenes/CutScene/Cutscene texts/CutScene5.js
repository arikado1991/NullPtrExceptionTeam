#pragma strict
var bg:Texture;
function Awake(){
		
		this.GetComponent(GUITexture).texture = bg;
		this.GetComponent(RollingScript).texts = [
		"Oh my god Rufus, are you okay.",
		"Hey calm down.",
		"Could you just be quiet!",
		"You think you are the only one who feel this way",
		"What don't I know?",
		"The feeling when they ignore you?",
		"The feeling when they pass by as if you're no one?",
		"The same and the same, everyday?",
		"Doesn't the name 'Spike' ring a bell to you?", ""
		];

}
function LoadScene()
{
	Application.LoadLevel("Level 5");

}