#pragma strict

class SpaceBox extends System.Object{

	var state: boolean = false;
	var grid: Grid;
	var prefab: GameObject;

	var pos: Vector3;
	var destination: boolean=false;
	var button: boolean=false;
	var pushed: boolean=false;
	var buttonCreateBlocks: boolean = true;


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
	
	function setButton(){
		this.button=true;
	}
	
	
}