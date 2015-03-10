#pragma strict

class ButtonBox extends Block{
	var boxes2make: Vector3[];
	var boxes2dest: Vector3[];
	var pushed: boolean;
	var elastic: boolean;
	function ButtonBox(grid, boxes2make: Vector3[], boxes2dest: Vector3[], elastic: boolean){
		super(grid);
		bType = BoxType.BUTTON;
		this.boxes2make = boxes2make;
		this.boxes2dest = boxes2dest;
		this.elastic = elastic;
	}
	
	function getPushed(){
	
		if (!this.pushed)
		{
			this.pushed=true;
			this.prefab.FindGameObjectWithTag("button").transform.Translate(Vector3.up*-0.08); //TODO: make this less magic-number-y
			//= Vector3(pos.x-0.6,pos.y+,pos.z-0.6);
			
			for (var i = 0; i < boxes2make.length; i++)
				grid.CreateBlock(boxes2make[i]);
			for (i = 0; i < boxes2dest.length; i++)
				grid.Destroy(boxes2dest[i]);
		}
		
		
	}
		
	function Release(){
	
		if (this.pushed==true)
		{
			this.pushed=true;
			this.prefab.FindGameObjectWithTag("button").transform.Translate(Vector3.up*0.08);  //TODO: make this less magic-number-y
			
			if (!elastic) return;
			
			for (var i = 0; i < boxes2make.length; i++)
				grid.Destroy(boxes2make[i]);
			for (i = 0; i < boxes2dest.length; i++)
				grid.CreateBlock(boxes2dest[i]);
		}
	}
};