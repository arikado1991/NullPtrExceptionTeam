function GenerateLevel(grid:Grid){
	var block: SpaceBox;
	var pos: Vector3;
	
	grid.SetGrid(10,20,10);
	for (var i: int=0; i<10; i++){
		for (var j: int=0;j<10;j++){
			
			
			grid.CreateBlock(Vector3(i,0,j));
			grid.CreateBlock(Vector3(i,1,j));
			grid.CreateBlock(Vector3(i,2,j));
			grid.CreateBlock(Vector3(i,3,j));
		}
	}
	
	grid.BuildRect(Vector3(0, 4, 4), Vector3(5,6,9),"box");
	grid.BuildRect(Vector3(0, 6, 7), Vector3(2,8,9),"box");
	grid.CreateBlock(Vector3(0,9,9));
	
	grid.CreateIceBlock(Vector3(8, 4, 1));
	grid.CreateIceBlock(Vector3(8, 5, 1));
	grid.CreateIceBlock(Vector3(8, 6, 1));
	grid.CreateIceBlock(Vector3(8, 7, 1));
	//var button:Block=grid.CreateButton(Vector3(13,1,1),[Vector3(11,2,7),Vector3(11,3,8),Vector3(11,4,9)],[],false);
	
	grid.SpawnCharacter(Vector3(9,5,0));
	grid.CreateDestination(Vector3(0, 10, 9));
}