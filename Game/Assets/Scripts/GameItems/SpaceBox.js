#pragma strict
enum SType {BOX, EDIBLE};
class SpaceBox extends System.Object{

	var state: boolean = false;
	var grid: Grid;
	var prefab: GameObject;
	var type: SType;
	var pos: Vector3;
	var destination: boolean=false;



	function SpaceBox( grid: Grid){
		this.grid = grid;		
	}
	
	function loadPos(pos: Vector3){
		this.pos = pos;
	}
	
	function loadPrefab(prefab: GameObject){
	
		this.prefab = GameObject.Instantiate(prefab, pos, Quaternion.identity);
		this.prefab.transform.position = Vector3(pos.x, pos.y, pos.z);
	}
	

	
	
}