#pragma strict

#pragma strict


//
var bg:Texture;

function Awake(){
		
		this.GetComponent(GUITexture).texture = bg;
		this.GetComponent(RollingScript).texts = [
		"Eat the pizza! It helps you regain part of your consciousness!",
		"Bad pizza taste fine if it's not real!",
		"This is nothing compared to what I've eaten!",
		"With this you should be able to wake up and get help.",
		"You don't have much time"
		
		];
		
//		counter = 0;
//	BroadcastMessage("setBackground", bg);
//	BroadcastMessage("setTexts", texts);
}
function LoadScene()
{
	Application.LoadLevel("Level 2");

}