#pragma strict
var customSkin:GUISkin;
var buttonW:int;// = 600;
var buttonH:int;// = 100;
var padding:int;// = 30;
var levels:String[,]; 

var maxLv: int ;

function Start () {
	var levelslist = [["Play Level 1", "Level 1"], 
						["Play Level 2", "Level 2"], 
						["Play Level 3", "Level 3"], 
						["Open demo", "Level 4"],
						["Title Screen", "Title"]];
	maxLv = levelslist.GetLength(0);
	levels = new String[maxLv,2];
	
	for (var i:int = 0; i < maxLv; i++){

		levels[i,0] = levelslist[i][0];
		levels[i,1] = levelslist[i][1];
	}
}
function Update () {}

function OnGUI(){

	buttonH = Screen.height*.8/ maxLv;
	buttonW = buttonH*2;
	padding = Screen.height*.02;
	for (var i:int = 0; i < maxLv; i++){


		var pos:Rect = Rect(Screen.width / 2 - buttonW/2, padding + i*(buttonH+padding), 
							buttonW, buttonH);
		if(GUI.Button(pos, levels[i,0])){
			Debug.Log(levels[i,1]);
			Application.LoadLevel(levels[i,1]);
		}
	}
}