#pragma strict


//
var bg:Texture;

function Awake(){
		
		this.GetComponent(GUITexture).texture = bg;
		this.GetComponent(RollingScript).texts = [
		"Hmm strange! There shouldn't be anyone else here!",
		"Can you tell me more about this person.",
		"Wendy's Place? That's must be where she ran into...",
		"A flower shop huh? Looks empty.",
		"Do you have a crush on her?",
		"Haha gotcha!",
		"Oh there she is. ",
		"Did she say'Have a good one?'",
		"That sounds ... Rufus! Stop! That's not Wendy. Dont!", ""
		];

}
function LoadScene()
{
	Application.LoadLevel("Level 3");

}