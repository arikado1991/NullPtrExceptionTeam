#pragma strict


function GenerateLevel(grid:Grid){
	var block: SpaceBox;
	var pos: Vector3;
	
	grid.SetGrid(20,20,20);
	
	grid.CreateBlock(Vector3(0,0,5));
//	grid.CreateIceBlock(Vector3(1,1,3));
	for (var i:int= 0; i < 10; i++)
		grid.CreateTrap(Vector3(i+1, 0, 5));
		
	grid.CreateTrap(Vector3(4, 1, 4));
//		grid.CreateButton(Vector3(13,0,6))
	//grid.BuildRect(Vector3(0, 0, 7), Vector3(9,0,9),"box");
	
	grid.SpawnCharacter(Vector3(0,9,5));
	grid.CreateDestination(Vector3(9,1,9));
	grid.character.prefab.FindGameObjectWithTag("MainCamera").BroadcastMessage("Shake");
	grid.character.prefab.FindGameObjectWithTag("MainCamera").BroadcastMessage("SwitchView", true);
}
