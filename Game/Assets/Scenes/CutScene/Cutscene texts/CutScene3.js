#pragma strict


//
var bg:Texture;

function Awake(){
		
		this.GetComponent(GUITexture).texture = bg;
		this.GetComponent(RollingScript).texts = [
		"Hmm strange! There shouldn't be anyone else here!",
		"Can you tell me more about this person.",
		"Wendy's Place? That's must be where she ran into",
		"Don't be deceived by how the place look!", ""
		];

}
function LoadScene()
{
	Application.LoadLevel("Level 2");

}