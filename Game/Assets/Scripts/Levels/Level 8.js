function GenerateLevel(grid:Grid){
	var block: SpaceBox;
	var pos: Vector3;
	
	grid.SetGrid(7,10,7);
	for (var x: int=0; x<7; x++){
		for (var z: int=0;z<7;z++){
			if (z == 2 && x > 1 && x < 5) continue;
			grid.CreateBlock(Vector3(x,0,z));			
		}
	}
	
	for (x=0; x<7; x++){
		//for (var z: int=0;z<7;z++){
			if (x == 3) continue;
			grid.CreateBlock(Vector3(x,1,3));			
		//}
	}
	
	grid.CreateBlock(Vector3(4,2,3));
	grid.CreateBlock(Vector3(5,2,3));
	grid.CreateBlock(Vector3(4,3,3));
	grid.CreateBlock(Vector3(5,3,3));
	grid.CreateBlock(Vector3(6,2,3));
	grid.CreateBlock(Vector3(6,3,3));
	
	for (x=0; x<7; x++){
		for (z=4;z<7;z++){
//			if (x == 3) continue;
			if (x == 1 && z == 6) continue;
			grid.CreateBlock(Vector3(x,1,z));
			if (x < 3) continue;
			grid.CreateBlock(Vector3(x,2,z));
			grid.CreateBlock(Vector3(x,3,z));
		}
	}
//	
//	grid.CreateBlock(Vector3(8,2,3));
	grid.CreateIceBlock(Vector3(3, 1, 1));
	grid.CreateIceBlock(Vector3(1, 2, 4));
	var button:Block=grid.CreateButton(Vector3(1,3,6),[Vector3(2,0,2),Vector3(3,0,2),Vector3(4,0,2)],[],false);
	
	grid.SpawnCharacter(Vector3(1,5,1));
	grid.CreateDestination(Vector3(6, 4, 6));
	grid.CreatePizza(Vector3(3,4,4));
	grid.CreatePizza(Vector3(3,2,3));
	grid.player.FindGameObjectWithTag("MainCamera").BroadcastMessage("Shake");
	
}