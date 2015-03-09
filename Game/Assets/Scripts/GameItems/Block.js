#pragma strict

class Block extends SpaceBox{

	function Block( grid: Grid){
		super(grid);
		type = BoxType.BLOCK;
	}

	
};

class IceBlock extends SpaceBox{

	function IceBlock( grid: Grid){
		super(grid);	
		type = BoxType.ICE;
	}
};

