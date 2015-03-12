#pragma strict

class ButtonBox extends Block{
	var boxes2make: Vector3[];
	var boxes2dest: Vector3[];
	var pushed: boolean;
	var elastic: boolean;
	var reverse: boolean=false;
	var mode:int;
	
	var hintPrefab:GameObject;
	function ButtonBox(grid, boxes2make: Vector3[], boxes2dest: Vector3[], elastic: boolean){
		super(grid);
		bType = BoxType.BUTTON;
		this.boxes2make = boxes2make;
		this.boxes2dest = boxes2dest;
		this.elastic = elastic;
		this.mode=0;
		
		this.hintPrefab = Resources.Load("ButtonHintPrefab");
		
		//GameObject.FindObjectsOfTypeIncludingAssets(ButtonHintPrefab);
		for (var i:int = 0; i<boxes2make.length; i++){
			GameObject.Instantiate(this.hintPrefab, boxes2make[i], Quaternion.identity);
		}
		for (i = 0; i<boxes2dest.length; i++){
			GameObject.Instantiate(this.hintPrefab, boxes2dest[i], Quaternion.identity);
		}
	}
	
	function getPushed(){
	
		if (!this.pushed)
		{
			this.pushed=true;
			this.prefab.FindGameObjectWithTag("button").transform.Translate(Vector3.up*-0.08);
			var i:int; 
			if (!reverse){
			for (i = 0; i < boxes2make.length; i++)
				grid.CreateBlock(boxes2make[i]);
			for (i = 0; i < boxes2dest.length; i++)
				grid.Destroy(boxes2dest[i]);
				}
			else{
					if (mode==0)
						{
						for (i = 0; i < boxes2make.length; i++)
						grid.CreateBlock(boxes2make[i]);
						}
					if (mode==1)
						{
						for (i = 0; i < boxes2make.length; i++)
						grid.Destroy(boxes2make[i]);
						}
					mode=(mode+1)%2;
				}
			}
	}
		
		
	function Release(){
	
		if (this.pushed==true)
		{
			this.pushed=false;
			this.prefab.FindGameObjectWithTag("button").transform.Translate(Vector3.up*0.08);
			
			if (!elastic) return;
			
			for (var i = 0; i < boxes2make.length; i++)
				grid.Destroy(boxes2make[i]);
			for (i = 0; i < boxes2dest.length; i++)
				grid.CreateBlock(boxes2dest[i]);
		}
	}
};