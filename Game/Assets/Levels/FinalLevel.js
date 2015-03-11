#pragma strict


function GenerateLevel(grid:Grid){
	var block: SpaceBox;
	var pos: Vector3;
	
	grid.SetGrid(20,20,20);
	
	grid.CreateTrap(Vector3(0,0,5));
	for (var i:int= 0; i < 10; i++)
		grid.CreateTrap(Vector3(i+1, 0, 5));
	for (var j: int = 0; j < 10; j++)
	{	
		grid.CreateTrap(Vector3(i, j, j+5));
		
	}
	grid.BuildRect(Vector3(i-1,j,j+5), Vector3(i+1, j,j+7),"box");
	var bridge: Vector3[] = new Vector3[10];
	for (i = 0; i < 10; i++)
		bridge[i] = Vector3(i+3,j,j+5);
	Debug.Log(Vector3(i+2,j,j+5).ToString());
	grid.CreateButton(Vector3(i+3,j+1,j+6), bridge.Clone(),[], false);
	
	grid.BuildRect(Vector3(2,j,5), Vector3(4, j,7),"box");	
	
//		grid.CreateButton(Vector3(13,0,6))
	//grid.BuildRect(Vector3(0, 0, 7), Vector3(9,0,9),"box");
	
	grid.SpawnCharacter(Vector3(0,9,5));
	grid.CreateDestination(Vector3(9,1,9));
	grid.character.prefab.FindGameObjectWithTag("MainCamera").BroadcastMessage("Shake");
}
