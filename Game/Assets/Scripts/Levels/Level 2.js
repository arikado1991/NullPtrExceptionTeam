﻿function GenerateLevel(grid:Grid){
	var block: SpaceBox;
	var pos: Vector3;
	grid.SetGrid(10,10,10);
	for (var i: int=0; i<10; i++){
		for (var j: int=0;j<10;j++){
			//grid.CreateTile(Vector3(i,0,j));
			if (i == 5) continue;
			grid.CreateBlock(Vector3(i,0,j));
//			if (i == 4 && j == 0) continue;
//			if (i == 6 && j == 9) continue;
			grid.CreateBlock(Vector3(i,1,j));
		}
	}
	
	var button:Block = grid.CreateButton(Vector3(1,2,3), [Vector3(5,0,5), Vector3(5,1,5), Vector3(5,2,5)],[], false);

	grid.CreatePizza(Vector3(6,2,4));
	grid.SpawnCharacter(Vector3(1,5,1));		
	grid.CreateDestination(Vector3(8, 2, 8));
	
}


var instruct: int=0;
function OnGUI(){
	if (instruct==0){
	 GUI.Window (0, Rect(Screen.width/2-150, 10, 300, 60), InstructionFunction, "Step on the button to create a bridge\n (Press space to continue)");
	 }
	if (instruct==1){
	 GUI.Window (0, Rect(Screen.width/2-150, 10, 300, 60), InstructionFunction, "Collect pizzas on your way\n");
	}
	
}

function InstructionFunction(windowID: int){
	if (Input.GetKeyUp("space"))
	{
		instruct+=1;
	}
}