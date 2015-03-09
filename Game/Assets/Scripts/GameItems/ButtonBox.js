#pragma strict

class ButtonBox extends Block{
	var boxes2make: Vector3[];
	var boxes2dest: Vector3[];
	var pushed: boolean;
	function ButtonBox(grid, boxes2make: Vector3[], boxes2dest: Vector3[]){
		super(grid);
		type = BoxType.BUTTON;
		this.boxes2make = boxes2make;
		this.boxes2dest = boxes2dest;
	}
	
	function getPushed(){
	
		if (!this.pushed)
		{
			this.pushed=true;
			this.prefab.transform.GetChild(11).Translate(Vector3.up*-0.08); //TODO: make this less magic-number-y
			//= Vector3(pos.x-0.6,pos.y+,pos.z-0.6);
			
			for (var i = 0; i < boxes2make.length; i++){
					Debug.Log("Ding");
					grid.CreateBlock(boxes2make[i]);

//					GameObject.Destroy(grid.getSpaceBox(boxes2make[i]).prefab);
				}
			}
		
		
	}
		
	function Release(){
	
		if (this.pushed==true)
		{
			this.pushed=false;
			//Debug.Log("Unpush");
			this.prefab.transform.GetChild(11).Translate(Vector3.up*0.08);
		}
	}
};