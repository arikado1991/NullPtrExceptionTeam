var materialDest:   Material;

function GenerateLevel(grid:Grid){
	var block: SpaceBox;
	var pos: Vector3;
	grid.SetGrid(5,10,7);
	grid.CreatePizza(Vector3(2,3,4));
	//grid.CreatePizza(Vector3(4,4,1));
	
	grid.BuildRect(Vector3(0, 0, 0), Vector3(4,0,6),"box");
	grid.BuildRect(Vector3(0, 0, 4), Vector3(4,2,6),"box");

	grid.SpawnCharacter(Vector3(1,1,1));
	grid.CreateIceBlock(Vector3(3,1,1));
	grid.CreateDestination(Vector3(2, 3, 6));
}

var instruct: int=0;
function OnGUI(){

	var buttonW:int = 400;
	var buttonH:int = 100;
	if (instruct==0){
	 GUI.Window (0, Rect(Screen.width/2-buttonW/2, 10, buttonW, buttonH), InstructionFunction, 
	 	"That cliff is awfully tall...\nPress the 'Z' key while facing the green block\nReset button in top right\n(Press space to dismiss)");
	}
}

function InstructionFunction(windowID: int){
	if (Input.GetKeyUp("space"))
		instruct++;
}