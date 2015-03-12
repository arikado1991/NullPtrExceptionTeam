var customSkin:GUISkin;
@HideInInspector
//static var bg: Texture;
static var texts: String[];
var showText: String;
var counter: int;
var processing: boolean = false;
var fontSize : float;
var mode: boolean;



function Start()
{
	customSkin.box.fontSize = Screen.height*.05;

	fetchDialogue();	
	counter = 0;
}


function fetchDialogue(){
if (counter < texts.Length){
		showText = texts[counter];
		counter++;
		yield WaitForSeconds(.2);
		processing = false;
	}

}

function OnGUI () {
	GUI.skin = customSkin;
	var halfScreenW:float = Screen.width/2;
	var halfButtonW:float = Screen.width*.2;
	var bg: Texture = this.GetComponent(GUITexture).texture;
//	GUILayout.BeginArea(Rect( 
//		(Screen.width - bg.width*Screen.height/bg.height)*.5, 0,bg.width*Screen.height/bg.height, Screen.height));
		
//		GUI.DrawTexture(Rect(0,0, Screen.width, Screen.height), bg, ScaleMode.StretchToFill);
	GUI.Box(Rect(0,  Screen.height*.6, Screen.width, Screen.height*.4), showText);

		if (Input.anyKey && !processing){
			processing = true;
			fetchDialogue();
		}

	
	
//	GUILayout.EndArea();
	if (counter >= texts.Length)
		BroadcastMessage("LoadScene");
}