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
	if (instruct==0){
	 GUI.Window (0, Rect(Screen.width/2-150, 10, 300, 60), InstructionFunction, "Use arrow keys to move\n (Press space to continue)");
	 }
	 if (instruct==1){
	 GUI.Window (0, Rect(Screen.width/2-150, 10, 300, 60), InstructionFunction, "Use X or C to rotate the camera\n");
	}
	if (instruct==2){
	 GUI.Window (0, Rect(Screen.width/2-150, 10, 300, 60), InstructionFunction, "Move to the red cube\n");
	}
}

function InstructionFunction(windowID: int){
	if (Input.GetKeyUp("space"))
	{
		instruct+=1;
	}
}