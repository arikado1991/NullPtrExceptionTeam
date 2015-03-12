function GenerateLevel(grid:Grid){
	var block: SpaceBox;
	var pos: Vector3;
	grid.SetGrid(7,10,4);
	
	grid.BuildRect(Vector3(0, 0, 0), Vector3(2,1,3),"box");
	grid.BuildRect(Vector3(6, 0, 0), Vector3(6,1,2),"box");


//	for (var i: int=0; i<10; i++){
//		for (var j: int=0;j<10;j++){
//			//grid.CreateTile(Vector3(i,0,j));
//			if (i == 5) continue;
//			grid.CreateBlock(Vector3(i,0,j));
////			if (i == 4 && j == 0) continue;
////			if (i == 6 && j == 9) continue;
//			grid.CreateBlock(Vector3(i,1,j));
//		}
//	}
	
	var button:Block = grid.CreateButton(Vector3(1,2,2), 
		[Vector3(3,1,1), Vector3(4,1,1), Vector3(4,1,0), Vector3(5,1,0)],[], false);

	grid.SpawnCharacter(Vector3(1,2,0));		
	grid.CreateDestination(Vector3(6, 2, 2));
	
}


var instruct: int=0;
function OnGUI(){

	var buttonW:int = 400;
	var buttonH:int = 60;
	if (instruct==0){
	 GUI.Window (0, Rect(Screen.width/2-buttonW/2, 10, buttonW, buttonH), InstructionFunction, "Oh no! You can't reach the target!\nMaybe that button could help...\n(Press space to dismiss)");
	}
}

function InstructionFunction(windowID: int){
	if (Input.GetKeyUp("space"))
		instruct++;
}