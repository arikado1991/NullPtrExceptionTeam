#pragma strict
enum BoxType {BLOCK, ICE, BUTTON};
class Block extends SpaceBox{
	var bType: BoxType;
	function Block( grid: Grid){
		super(grid);
		type = SType.BOX;
		bType = BoxType.BLOCK;
	}

	
};

class IceBlock extends Block{

	function IceBlock( grid: Grid){
		super(grid);	
		bType = BoxType.ICE;
	}
};

