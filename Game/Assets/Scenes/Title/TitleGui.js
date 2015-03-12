var customSkin:GUISkin;

var buttonW:int;

var buttonH:int;


function Start()
{
	customSkin.box.fontSize = Screen.height*.4;
}


function OnGUI () {
	var halfScreenW:float = Screen.width/2;
	var halfButtonW:float = buttonW/2;
	GUI.skin = customSkin;

	if(GUI.Button(Rect(Screen.width*.75-halfButtonW, Screen.height*1/5, halfButtonW*2, halfButtonW), "Start"))
	{
	Application.LoadLevel("Cutscene1");
	}
	if(GUI.Button(Rect(Screen.width*.75-halfButtonW, Screen.height*3/5, halfButtonW*2, halfButtonW), "Level Select"))
	{
		Application.LoadLevel("LevelSelect");
	}

}