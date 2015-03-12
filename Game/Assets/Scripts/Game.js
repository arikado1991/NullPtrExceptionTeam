#pragma strict
var AllPrefabs: 	GameObject[];
var character: 		Character;
var grid:			Grid;
var processing: 	boolean = false;
var state:   		String= "inGame";
var materialDest:   Material;
var move:    		int;
var level:          int;
var customSkin: 	GUISkin;
var setting: 		SettingScript;
var timeLimit:		float[];


function Awake () {

	var stscript:SettingScript= GameObject.FindGameObjectWithTag("setting").GetComponent("SettingScript");
	
	AllPrefabs = stscript.FetchPrefabs();
//	timeLimit = stscript.FetchTimeLimits();
	state="inGame";
	move=0;
	Application.targetFrameRate = 50;
	grid = new Grid(AllPrefabs);
	this.BroadcastMessage("GenerateLevel", grid);
	character  = grid.character;
}



function getControlKey(){
	var wait:float = 1;
	if (processing) return;
	
	var p:Vector3 =character.pos - Vector3.down;

	if (Input.GetKey('x'))
	{
		var c=character.prefab.FindGameObjectWithTag("MainCamera");
		
		c.transform.RotateAround(character.prefab.transform.position, Vector3.up,2);
	}

	if (Input.GetKey('c'))
	{
		c=character.prefab.FindGameObjectWithTag("MainCamera");
		
		c.transform.RotateAround(character.prefab.transform.position, Vector3.up,-2);
	}


	if (character.onButton==true)
	{
		var b: ButtonBox = grid.getSpaceBox(p);
		b.Release();
		character.onButton=false;
	}
	
	if (Input.GetKeyDown('z')){
		processing = true;
		StartCoroutine(character.tryToPushIce(character.dir, grid));
		yield WaitForSeconds(.2);
	}
	
	if (Input.GetKeyDown (KeyCode.UpArrow)){
		processing = true;
		StartCoroutine(character.move(Dir.UP, grid));
		move++;
		yield WaitForSeconds(.2);
	}
	else if (Input.GetKeyDown (KeyCode.DownArrow)){
		processing = true;
		StartCoroutine(character.move(Dir.DOWN, grid));
		move++;
		yield WaitForSeconds(.2);
	}
	else if (Input.GetKeyDown (KeyCode.LeftArrow)){
		processing = true;
		StartCoroutine(character.move(Dir.LEFT, grid));
		move++;
		yield WaitForSeconds(.2);
	}
	else if (Input.GetKeyDown (KeyCode.RightArrow)){
		processing = true;
		StartCoroutine(character.move(Dir.RIGHT, grid));
		move++;
		yield WaitForSeconds(.2);
		
	}
	/* WON!*/
	processing = false;
	if (grid.state == GridState.FINISHED)
		state = "won";

	
}
function Update () {
	if (state=="inGame")
	{
		if (processing) return;	
		getControlKey();
	}
}


function OnGUI()
{
	
	if(state == "inGame")
	{
		if (GUI.Button(Rect(Screen.height*.02, Screen.height*.02,Screen.height*.1, Screen.height*.1), "Retry")){
			Application.LoadLevel("Level "+ (level).ToString());
		}
	}
	if (state == "won")
	{

		customSkin.box.fontSize = Screen.height*.1;

		var buttonH:int = Screen.height*.2;
		var buttonW: int = Screen.height*.4;
		customSkin.button.fontSize = Screen.height*.08;
		
		GUI.skin = customSkin;
		GUI.Box(Rect(Screen.width*.3,Screen.height*.15,Screen.width*.4,Screen.height*.7), "Nice Job!");
		if (GUI.Button(Rect(Screen.width / 2 - buttonW/2, Screen.height*.3, buttonW, buttonH), "Level Select")){
			Application.LoadLevel("LevelSelect");
		}
		
		if (GUI.Button(Rect(Screen.width / 2 - buttonW/2, Screen.height*.6, buttonW, buttonH), "Continue")){
			if (level < 10) 
			Application.LoadLevel("Level "+ (level+1).ToString());
			if (level == 10 )
				Application.LoadLevel("Conclusion");
		}


	}
}
