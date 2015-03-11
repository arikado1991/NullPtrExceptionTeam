var materialDest:   Material;

function GenerateLevel(grid:Grid){
	var block: SpaceBox;
	var pos: Vector3;
	
	grid.SetGrid(10,10,10);
	
	grid.BuildRect(Vector3(0, 0, 0), Vector3(9,0,5),"box");
	grid.BuildRect(Vector3(0, 1, 4), Vector3(4,2,4), "box");
	grid.CreateIceBlock(Vector3(1,1,3));
	grid.CreateButton(Vector3(4, 1, 3), [Vector3(5,1,6),Vector3(5,1,5),Vector3(5,1,7)],[Vector3(0, 1, 4)], false);
	grid.BuildRect(Vector3(0, 0, 7), Vector3(9,0,9),"box");
	
	grid.SpawnCharacter(Vector3(0,9,0));
	grid.CreateDestination(Vector3(9,1,9));
}


function setDestination(grid:Grid, location:Vector3){
	grid.getSpaceBox(location).destination=true;
	grid.getSpaceBox(location).prefab.transform.GetChild(7).renderer.material=materialDest;
}

var windowRect : Rect = Rect (Screen.width/2-150, 10, 300, 200);
var buttonW:int = 200;
var buttonH:int = 100;
var instruct: int=0;
function OnGUI(){
	if (instruct==0){
	 GUI.Window (0, Rect(Screen.width/2-150, 10, 300, 70), InstructionFunction, "Use arrow keys to move\n (Press space to continue)");
	 }
	if (instruct==1){
	 GUI.Window (0, Rect(Screen.width/2-150, 10, 300, 70), InstructionFunction, "Move to the red cube\n (Press space to continue)");
	}
}

function InstructionFunction(windowID: int){
	if (Input.GetKeyUp("space"))
	{
		instruct+=1;
	}
}