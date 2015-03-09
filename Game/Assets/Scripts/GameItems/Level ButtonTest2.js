/*function GenerateLevel(grid:Grid){
	var block: SpaceBox;
	var pos: Vector3;
	
	for (var i: int=0; i<10; i++){
		for (var j: int=0;j<10;j++){
			grid.CreateTile(Vector3(i,0,j));
			if (i == 5) continue;
			grid.CreateBlock(Vector3(i,0,j));
			//if (i == 4 && j == 0) continue;
			//if (i == 6 && j == 9) continue;
			grid.CreateBlock(Vector3(i,1,j));
		}
	}
	
	//grid.CreateIceBlock(Vector3(3,2,2));
	
	var button:Block = grid.CreateButton(Vector3(1,2,3));
	button.buttonCreateBlocks = true;
	button.blocksToMake = [Vector3(5,0,5), Vector3(5,1,5)];
	
	grid.CreateBlock(Vector3(8, 0, 8));
		
	setDestination(grid, Vector3(8, 1, 8));
	
}
var materialDest:   Material;

function setDestination(grid:Grid, location:Vector3){
	grid.getSpaceBox(location).destination=true;
	grid.getSpaceBox(location).prefab.transform.GetChild(7).renderer.material=materialDest;
}*/
