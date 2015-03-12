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
		"You don't have much time, just press the emergency button",
		"<gasp>", "<pain>, <pain>", "<siren sound>", "Nurse: My goodness, we need someone here quickly!",
		"...",
		"...",
		"Doctor: That was close.",
		"...",
		"Oh you came to... Welcome back",
		"You're in your dream again of course.",
		"I guess it makes sense since you're gonna stick around for a while...",
		"You can call me Spike!",
		"<woman screaming>",
		"Wendy? Who's that??",
		"Rufus! Wait!",""
		
		];

}
function LoadScene()
{
	Application.LoadLevel("Level 2");

}