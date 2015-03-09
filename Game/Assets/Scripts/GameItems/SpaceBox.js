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
	var blocksToMake: Vector3[] = [Vector3(0,3,0), Vector3(0,4,0)];

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
	
	function getPushed(){
	
		if (this.pushed==false)
		{
			this.pushed=true;
			this.prefab.transform.GetChild(11).Translate(Vector3.up*-0.08); //TODO: make this less magic-number-y
			//= Vector3(pos.x-0.6,pos.y+,pos.z-0.6);
			
			for (var i = 0; i < blocksToMake.length; i++){
				if (buttonCreateBlocks){
					grid.CreateBlock(blocksToMake[i]);
				} else {
					GameObject.Destroy(grid.getSpaceBox(blocksToMake[i]).prefab);
				}
			}
			//buttonCreateBlocks = !buttonCreateBlocks;
		}
	}
		
	function Unpushed(){
		//Debug.Log("Unpush0");
		if (this.pushed==true)
		{
			this.pushed=false;
			//Debug.Log("Unpush");
			this.prefab.transform.GetChild(11).Translate(Vector3.up*0.08);
		}
	}
}