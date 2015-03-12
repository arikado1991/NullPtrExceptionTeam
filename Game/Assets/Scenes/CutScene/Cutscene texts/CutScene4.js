#pragma strict


//
var bg:Texture;

function Awake(){
		
		this.GetComponent(GUITexture).texture = bg;
		this.GetComponent(RollingScript).texts = [
		"Rufus! Are you ok?",
		"She pushed you really hard, huh?",
		"Don't be down, that's not really her.",
		"It's just the image of her in your consciousness",
		"Hey, I was  just saying the truth!",
		"There seems to be more than one persons here",
		"What? His name is Larry? Good to know.",
		"Mah! Mechanics tends to stink",
		"Don't say that? Shame on you for not having a good nose.",
		"Hey, I was just kidding",
		"It is dangerous to go in front of his car! Wait!",
		"He can't help you, he's not real either!",
		"He's going to hit you! Jump out of the way Rufus!!", ""
		];

}
function LoadScene()
{
	Application.LoadLevel("Level 4");

}