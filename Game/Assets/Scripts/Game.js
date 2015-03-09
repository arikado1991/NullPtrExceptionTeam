#pragma strict
var AllPrefabs: 	GameObject[];
var character: 		Character;
var grid:			Grid;
var processing: 	boolean = false;
var state:   		String= "inGame";
var materialDest:   Material;
var move:    		int;
var level:          int;
var customSkin: GUISkin;



function Awake () {
	var setting:SettingScript= GameObject.FindGameObjectWithTag("setting").GetComponent("SettingScript");
	AllPrefabs = setting.FetchPrefabs();
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
	
	var p0:Vector3 =character.pos;
	p0.y-=1;
	if (character.onButton==true)
	{
		grid.getSpaceBox(p0).Unpushed();
		character.onButton=false;
	}
	if (Input.GetKeyDown (KeyCode.UpArrow)){
		processing = true;
		StartCoroutine(character.move(Dir.UP, grid));
		//processing = false;
		move++;
	}
	else if (Input.GetKeyDown (KeyCode.DownArrow)){
		processing = true;
		StartCoroutine(character.move(Dir.DOWN, grid));
		//processing = false;
		move++;
	}
	else if (Input.GetKeyDown (KeyCode.LeftArrow)){
		processing = true;
		StartCoroutine(character.move(Dir.LEFT, grid));
		//processing = false;
		move++;
	}
	else if (Input.GetKeyDown (KeyCode.RightArrow)){
		processing = true;
		StartCoroutine(character.move(Dir.RIGHT, grid));
		//processing = false;
		move++;
	}
	
	if (character.isMoving==false){
	
	var p:Vector3 =character.pos;
	p.y -= 1;
	if (p.y >= 0 && grid.getSpaceBox(p).destination==true)
	{	
		//Debug.Log(character.pos.ToString());
		state="win";
	}
	
	if (p.y >= 0 && grid.getSpaceBox(p).button==true)
	{	
		//Debug.LogError("PUSH!!!");
		//Debug.Log(character.pos.ToString());
		grid.getSpaceBox(p).getPushed();
		character.onButton=true;
	}
	}
	processing = false;
	
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
		//GUI.Box(Rect(10,10,200,50), "Move: "+move);
	}
	if (state == "win")
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
		
		if ( level < 4 && GUI.Button(Rect(Screen.width / 2 - buttonW/2, Screen.height*.6, buttonW, buttonH), "Continue")){
			Application.LoadLevel("Level "+ (level+1).ToString());
		}

	}
}
