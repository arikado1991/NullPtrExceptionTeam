#pragma strict
var customSkin:GUISkin;
var buttonW:int;// = 600;
@HideInInspector
var buttonH:int;// = 100;
@HideInInspector
var padding:int;// = 30;
var levels:String[,]; 

@HideInInspector
var maxLv: int ;

function Start () {
	var levelslist = [["Level 1 : Get Walking", "Level 1"], 
						["Level 2: Buttons!", "Level 2"], 
						["Level 3: Slide around", "Level 3"], 
//						["Level 4: Combinations", "Level 4"], 
						["Level 4: Getting Complicated", "Level 5"], 
						["Level 5: Breaking Walls", "Level 6"], 
						["Level 6: Fancy Sliding", "Level 7"], 
						["Level 7: Combo tricks", "Level 8"], 
						
						["Level 10: Earthquake!", "Level 10"], 
						//["Open demo", "Level 4"],
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
	GUI.skin = customSkin;
	buttonH = Screen.height*.8/ maxLv;
//	buttonW = buttonH*2;
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