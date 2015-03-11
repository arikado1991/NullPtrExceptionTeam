#pragma strict
enum BoxType {BLOCK, ICE, BUTTON, TRAP};
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

class TrapBox extends Block{
	function TrapBox(grid){
		super(grid);
		bType = BoxType.TRAP;
	}
	
	function Collapse(){
		grid.Destroy(prefab.transform.position);
	}
}