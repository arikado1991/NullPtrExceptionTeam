#pragma strict

#pragma strict
var bg:Texture;
function Awake(){
		
		this.GetComponent(GUITexture).texture = bg;
		this.GetComponent(RollingScript).texts = [
		"...",
		"I see.",
		"Time ... really is a cruel thing.",
		"Living beings forget.",
		"What do I mean? I guess I shouldn't have said that ... ",
		"I'm sorry. I was just frustrated ... ",""
		];

}
function LoadScene()
{
	Application.LoadLevel("Level 6");

}