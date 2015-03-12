var materialDest:   Material;

function GenerateLevel(grid:Grid){
	var block: SpaceBox;
	var pos: Vector3;
	
	grid.SetGrid(7,10,7);
	
	grid.BuildRect(Vector3(0, 0, 0), Vector3(6,0,6),"box");
	grid.BuildRect(Vector3(0, 1, 0), Vector3(0,2,6),"box");
	grid.BuildRect(Vector3(6, 1, 0), Vector3(6,2,6),"box");
	grid.BuildRect(Vector3(1, 1, 6), Vector3(5,2,6),"box");
	
//	grid.CreateBlock(Vector3(8, 0, 8));
	
	grid.SpawnCharacter(Vector3(2, 1, 0));
	grid.CreateDestination(Vector3(4,1,4));
}


//function setDestination(grid:Grid, location:Vector3){
//	grid.getSpaceBox(location).destination=true;
//	grid.getSpaceBox(location).prefab.transform.GetChild(7).renderer.material=materialDest;
//}

var instruct: int=0;
function OnGUI(){

	var buttonW:int = 400;
	var buttonH:int = 60;
	if (instruct==0){
	 GUI.Window (0, Rect(Screen.width/2-buttonW/2, 10, buttonW, buttonH), InstructionFunction, "Use the arrow keys to move\ntoward the spinning target\n (Press space to dismiss)");
	}
//	if (instruct==1){
//	 GUI.Window (0, Rect(Screen.width/2-150, 10, 300, 70), InstructionFunction, "Move to the red cube\n (Press space to continue)");
//	}
}

function InstructionFunction(windowID: int){
	if (Input.GetKeyUp("space"))
	{
		instruct+=1;
	}
}