#pragma strict
enum GridState {IDLE, INGAME, FINISHED};
class Grid extends System.Object{
	var prefabs: GameObject[];
	var grid: SpaceBox[,,];
	var character: Character;
	var state: GridState;
	
	function Grid(prefabs: GameObject[]){
		state = GridState.IDLE;
		this.prefabs = prefabs;
	}
	
	function SetGrid(w:int,h:int,d:int){
		grid = new SpaceBox[w,h,d];
	}
	
	function SpawnCharacter( pos: Vector3){
		
		while(!hasStandable(pos))
			pos.y--;
		character = new Character(pos,prefabs[0]);
	}
	
	function BuildRect(BLN: Vector3, TRF: Vector3, type: String){
		for (var i: int = BLN.x; i <= TRF.x; i++)
			for (var j: int = BLN.y; j <= TRF.y; j++)
				for (var k:int = BLN.z; k <= TRF.z; k++){
					switch(type){
					case "box":
						CreateBlock(Vector3(i,j,k));
					default: continue;
					}
				}
	}
	
	function getSpaceBox(pos:Vector3){
		if (pos.x < 0 || pos.y < 0 || pos.z < 0 ||
			pos.x >= grid.GetLength(0) || 
			pos.y >= grid.GetLength(1) || 
			pos.z >= grid.GetLength(2)) 
			return null;
		return grid[Mathf.RoundToInt(pos.x), Mathf.RoundToInt(pos.y), Mathf.RoundToInt(pos.z)];
	}
	

	
	function hasBox(pos:Vector3):boolean{
		var sp: SpaceBox = getSpaceBox(pos);
		if (!sp) return false;
		return sp.type == SType.BOX;
		
	}
	
	function hasIce(pos:Vector3):boolean{

		var box = getSpaceBox(pos);
		if (box && box.GetType() == typeof (IceBlock)){
			Debug.Log("pos="+pos.ToString()+"type="+box.GetType());
			return true;
		}
		return false;
	}
	
	function hasButton(pos: Vector3):boolean{
		var box = getSpaceBox(pos);
		if (box && box.GetType() == typeof (ButtonBox)){
			Debug.Log("pos="+pos.ToString()+"type="+box.GetType());
			return true;
		}
		return false;
	}
	
	function hasStandable(pos: Vector3):boolean{
	
		return !hasBox(pos) && hasBox(Vector3(pos.x,pos.y-1,pos.z));
	}
	
	function CreateIceBlock(pos: Vector3):IceBlock{
		var b: IceBlock = new IceBlock(this);
		b.loadPos (pos);
		b.loadPrefab(prefabs[3]);
		Destroy(Vector3(pos.x, pos.y, pos.z));
		grid[pos.x, pos.y, pos.z] = b;
		return b;
	}
	
	function CreateBlock(pos: Vector3):Block{
		var b: Block = new Block(this);
		b.loadPos (pos);
		b.loadPrefab(prefabs[2]);
		Destroy(Vector3(pos.x, pos.y, pos.z));
		grid[pos.x, pos.y, pos.z] = b;
		return b;
	}

	
	function CreateButton(pos: Vector3, boxes2make: Vector3[], boxes2dest:Vector3[], e: boolean):Block{
		var b: Block = new ButtonBox(this, boxes2make, boxes2dest, e );
		b.loadPos (pos);
		b.loadPrefab(prefabs[4]);
		Destroy(Vector3(pos.x, pos.y, pos.z));
		grid[pos.x, pos.y, pos.z] = b;
		return b;
	}
	function CreateTrap(pos:Vector3){
		var t: TrapBox = new TrapBox(this);
		t.loadPos (pos);
		t.loadPrefab(prefabs[2]);
		Destroy(Vector3(pos.x, pos.y, pos.z));
		grid[pos.x, pos.y, pos.z] = t;
	}
	
	
	
	function CreateDestination(pos:Vector3){
		var d: Edible = new Edible(this,EdibleType.DEST);
		d.loadPos (pos);
		d.loadPrefab(prefabs[6]);
		Destroy(Vector3(pos.x, pos.y, pos.z));
		grid[pos.x, pos.y, pos.z] = d;
	}
	
	function Destroy(pos: Vector3){
		var b: SpaceBox = getSpaceBox(pos);
		if (b!= null){
			GameObject.Destroy(grid[pos.x, pos.y, pos.z].prefab);
			grid[pos.x, pos.y, pos.z] = null;
		}
	}
	
	function CreatePizza(pos: Vector3){
		var d: Edible = new Edible(this,EdibleType.DEST);
		d.loadPos (pos);
		d.loadPrefab(prefabs[5]);
		Destroy(Vector3(pos.x, pos.y, pos.z));
		grid[pos.x, pos.y, pos.z] = d;
	}
	

	function LoadButton(pos: Vector3, newButton: ButtonBox){
		grid[pos.x, pos.y, pos.z] = newButton;
	}
};
	



