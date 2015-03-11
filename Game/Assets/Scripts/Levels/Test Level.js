#pragma strict
var materialDest:   Material;

function generateDemoLevel(grid:Grid){
	var block: SpaceBox;
	var pos: Vector3;
	
	for (var i: int=0; i<20; i++){
		for (var j: int=0;j<20;j++){
		}
	}
	
	grid.CreateBlock(Vector3(17, 0, 17));
	
	for (i = 0; i < 20; i++){
		for (j=0; j<5; j++){
			grid.CreateBlock(Vector3(9, j, i));
			grid.CreateBlock(Vector3(10, j, i));
		}
	}
	
	
	grid.CreateBlock(Vector3(3, 0, 3));
	grid.CreateBlock(Vector3(4, 1, 3));
	grid.CreateBlock(Vector3(5, 2, 3));
	grid.CreateBlock(Vector3(6, 3, 3));
	grid.CreateBlock(Vector3(6, 4, 2));
	grid.CreateBlock(Vector3(6, 5, 1));
	grid.CreateBlock(Vector3(7, 5, 1));
	grid.CreateBlock(Vector3(8, 6, 1));
	
	grid.CreateBlock(Vector3(8, 6, 1));
	grid.CreateBlock(Vector3(9, 6, 1));
	grid.CreateBlock(Vector3(10, 6, 1));
	grid.CreateBlock(Vector3(10, 6, 2));
	grid.CreateBlock(Vector3(11, 6, 2));
	grid.CreateBlock(Vector3(12, 5, 2));
	grid.CreateBlock(Vector3(12, 5, 3));
	grid.CreateBlock(Vector3(13, 4, 3));
	grid.CreateBlock(Vector3(13, 4, 4));
	grid.CreateBlock(Vector3(13, 3, 5));
	grid.CreateBlock(Vector3(14, 2, 5));
	grid.CreateBlock(Vector3(14, 1, 6));
	grid.CreateBlock(Vector3(15, 0, 6));
	
	grid.CreateIceBlock(Vector3(2,0,2));
	
	grid.CreateButton(Vector3(1,0,1),[Vector3(0,3,0), Vector3(0,4,0)],[], false);	
	setDestination(grid, Vector3(17, 0, 17));
	
	return;
		
	
	
	//setDestination(grid, Vector3(17, 1, 17));
	//setDestination(grid, Vector3(17, 2, 17));
}

function setDestination(grid:Grid, location:Vector3){
	grid.getSpaceBox(location).destination=true;
	grid.getSpaceBox(location).prefab.transform.GetChild(7).renderer.material=materialDest;
}