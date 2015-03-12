function GenerateLevel(grid:Grid){
	var block: SpaceBox;
	var pos: Vector3;
	grid.SetGrid(7,10,4);
	
	grid.BuildRect(Vector3(0, 0, 0), Vector3(2,1,3),"box");
	grid.BuildRect(Vector3(6, 0, 0), Vector3(6,1,2),"box");

	
	var button:Block = grid.CreateButton(Vector3(1,2,2), 
		[Vector3(3,1,1), Vector3(4,1,1), Vector3(4,1,0), Vector3(5,1,0)],[], false);

	grid.SpawnCharacter(Vector3(1,2,0));		
	grid.CreateDestination(Vector3(6, 2, 2));
	grid.CreatePizza(Vector3(6,2,1));	
}


var instruct: int=0;
function OnGUI(){

	var buttonW:int = 400;
	var buttonH:int = 100;
	if (instruct==0){
	 GUI.Window (0, Rect(Screen.width/2-buttonW/2, 10, buttonW, buttonH), InstructionFunction, "Oh no! You can't reach the target!\nMaybe that button could help...\n(Press space to dismiss)");
	}
}

function InstructionFunction(windowID: int){
	if (Input.GetKeyUp("space"))
		instruct++;
}