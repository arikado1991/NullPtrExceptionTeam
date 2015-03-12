function GenerateLevel(grid:Grid){
	var block: SpaceBox;
	var pos: Vector3;
	
	grid.SetGrid(7,10,7);
	for (var x: int=0; x<7; x++){
		for (var z: int=0;z<7;z++){
			grid.CreateBlock(Vector3(x,0,z));
			if (z == 0 && (x == 4 || x == 5 || x == 6)) continue;
			grid.CreateBlock(Vector3(x,5,z));
		}
	}
	
	grid.CreateBlock(Vector3(6,1,4));
	grid.CreateIceBlock(Vector3(4, 1, 4));
	grid.CreateIceBlock(Vector3(5, 1, 1));
	grid.CreateIceBlock(Vector3(2, 1, 3));
	
	grid.CreateBlock(Vector3(4,2,2));
	grid.CreateBlock(Vector3(4,3,1));
	grid.CreateBlock(Vector3(4,3,0));
	grid.CreateBlock(Vector3(5,4,0));
	
	
	grid.CreateBlock(Vector3(5,6,5));
	grid.CreateBlock(Vector3(5,7,5));
	//var button:Block=grid.CreateButton(Vector3(1,3,6),[Vector3(2,0,2),Vector3(3,0,2),Vector3(4,0,2)],[],false);
//	grid.CreateIceBlock(Vector3(4, 6, 3));
	grid.CreateIceBlock(Vector3(5, 6, 3));
//	grid.CreateIceBlock(Vector3(2, 6, 2));
	
	grid.SpawnCharacter(Vector3(1,1,1));
	grid.CreateDestination(Vector3(5,8,5));
	
	grid.CreatePizza(Vector3(5,2,3));
	grid.CreatePizza(Vector3(4,3,2));
	
}

var instruct: int=0;
function OnGUI(){

	var buttonW:int = 400;
	var buttonH:int = 70;
	if (instruct==0){
	 GUI.Window (0, Rect(Screen.width/2-buttonW/2, 10, buttonW, buttonH), InstructionFunction, 
	 	"Just keep going. Up.\n(Press space to dismiss)");
	}
}

function InstructionFunction(windowID: int){
	if (Input.GetKeyUp("space"))
		instruct++;
}