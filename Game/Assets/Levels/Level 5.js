/*var materialDest:   Material;

function generateLevel4(grid:Grid){
	var block: SpaceBox;
	var pos: Vector3;
	
	for (var i: int=0; i<15; i++){
		for (var j: int=0;j<15;j++){
			grid.CreateTile(Vector3(i,0,j));
			
			if (j<6 && (i==5 || i==6 || i==7 ||i==8))
			{
				if(j==3 && i!=8){
				grid.CreateBlock(Vector3(i,3,j));}
				continue;
			}
			grid.CreateBlock(Vector3(i,0,j));
			grid.CreateBlock(Vector3(i,1,j));
			
			if (j>=6 && i<=10)
			{
				grid.CreateBlock(Vector3(i,2,j));
				grid.CreateBlock(Vector3(i,3,j));
				grid.CreateBlock(Vector3(i,4,j));
			}
			
		}
	}
	grid.CreateBlock(Vector3(8,2,3));
	grid.CreateIceBlock(Vector3(1, 2, 3));
	var button:Block=grid.CreateButton(Vector3(13,1,1));
	button.buttonCreateBlocks = true;
	button.blocksToMake = [Vector3(11,2,7),Vector3(11,3,8),Vector3(11,4,9)];
	
	setDestination(grid, Vector3(1, 4, 13));
}


function setDestination(grid:Grid, location:Vector3){
	grid.getSpaceBox(location).destination=true;
	grid.getSpaceBox(location).prefab.transform.GetChild(7).renderer.material=materialDest;
}
*/