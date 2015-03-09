#pragma strict

var customSkin:GUISkin;
// button width:
var buttonW:int = 200;
// button height:
var buttonH:int = 100;
var texts: String[];
var credits: String[];
var showText: String;
var counter: int;
var processing: boolean = false;
var fontSize : float;
var mode: boolean;

var bg:Texture;

function Awake(){
//		GUI.skin.label.fontSize = GUI.skin.box.fontSize = GUI.skin.button.fontSize = fontSize;
		customSkin.box.fontSize = Screen.height*.05;
		mode = false;
		credits = ["Programming team:\n\nEric Miller\nJiacheng Liu\nViet Phan", "Story writer:\n\nEmily Haymond", 
		"Music composition:\n\nShannon Daniel \n (Admit it! It is the best music you've ever heard!)","Parkour expert\n\nAshwin Lall"];
		
		texts = ["<Rufus, half awaken and confused. He hears a voice talking to him>", "Rufus!", 
		"Rufus, wake up!", 
		"No I am not God.",
		"Nor who I am is what important right now.", 
		"No. You're not dead yet.", 
		"But you will be if you don't hurry up.",
		"Your oxygen supplier is broken!",
		"Forget about your web browser history! ",
		"You need to wake up ...",
		"...and get help!",
		"No! One doesn't simply wake up!",
		"You must go towards the pizza slice.",
		"Do not question me!",

		"You need to wake up ...and get help!",

		"... You're about to die. Hurry!",
		"I'll guide you along the way."
		];
		counter = 0;
		Debug.Log(texts.Length.ToString());
}
function Start()
{
	fetchDialogue();	
}


function fetchDialogue(){
	if (!mode ){
		processing = true;
		showText = "CREDIT\n\n"+credits[counter];
		counter++;
		if( counter >= credits.Length)
		{	mode = true;
			counter = 0;}
		yield WaitForSeconds(.8);
		processing = false;
	}

	else if (counter < texts.Length){
		showText = texts[counter];
		counter++;
		yield WaitForSeconds(.2);
		processing = false;
	}

	else Application.LoadLevel("Level 1");

}

function OnGUI () {
	GUI.skin = customSkin;
	var halfScreenW:float = Screen.width/2;
	var halfButtonW:float = buttonW/2;



	GUILayout.BeginArea(Rect( 
		(Screen.width - bg.width*Screen.height/bg.height)*.5, 0,bg.width*Screen.height/bg.height, Screen.height));
		
		//GUI.DrawTexture(Rect(0,0, Screen.width, Screen.height), bg, ScaleMode.StretchToFill);
		GUI.Box(Rect(0,  Screen.height*.6,Screen.height*bg.width/bg.height, Screen.height*.4), showText);





//	GUILayout.BeginArea(Rect( 
//		(Screen.width - Screen.height*bg.width/bg.height)*.5, 0,Screen.height*bg.width/bg.height, Screen.height));
//		
//		GUI.DrawTexture(Rect(0,0, Screen.width, Screen.height), bg, ScaleMode.StretchToFill);


		if (Input.anyKey && !processing){
			processing = true;
			fetchDialogue();
		}



	GUILayout.EndArea();


}