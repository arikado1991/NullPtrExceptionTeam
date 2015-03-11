#pragma strict
enum CharState {IDLE, MOVING};
enum Dir {UP, DOWN, LEFT, RIGHT};

class Character extends System.Object
{
	var state: 		CharState; 
	var pos: 		Vector3;
	var prefab: 	GameObject;
	var dir:		Dir;
	var dirction:   int;	//0:up, 1:left, 2:down, 3:right
	var onButton:   boolean;
	@HideInInspector
	var isMoving:boolean = false;
	var willJump:boolean = false;
	function Character(pos: Vector3, prefab:GameObject){
		this.pos =  pos;
		state = CharState.IDLE;
		this.prefab = GameObject.Instantiate(prefab, pos, Quaternion.identity);
		this.dirction=0;
		this.dir=Dir.UP;
		this.onButton=false;
	}

	function motionTarget( dir: Dir, grid:Grid):Vector3{
		var desiredPos:Vector3 = spaceInFront(pos, dir);
		
		if (grid.hasStandable(desiredPos) )
			return desiredPos; //Do not step up or down

		
		if (grid.hasBox(desiredPos)  && grid.hasStandable(desiredPos + Vector3.up) && 
				!grid.hasBox(pos + Vector3.up)){
	
			willJump = true;
			return desiredPos + Vector3.up;} //Step up}

		
		if (!grid.hasStandable(desiredPos) && grid.hasStandable(desiredPos + Vector3.down) )
		{	willJump = true;
			return desiredPos + Vector3.down;} //Step down}
		//Debug.Log("How");
		return pos;
	}

	function tryToPushIce( dir: Dir, grid: Grid)  {
		
		var b: SpaceBox = grid.getSpaceBox(spaceInFront(pos, dir));
		if (!b || (b as Block).bType != BoxType.ICE)
			return;
	
		var obj:GameObject = b.prefab;
		obj.SendMessage("setGrid", grid);
		obj.SendMessage("setBox", b);
		obj.SendMessage("slide", dir);
		//Debug.Log("Ice block should be pushed");
		
		
	}

	function spaceInFront(pos: Vector3, dir:Dir):Vector3{
		
		var desiredPos:Vector3 = Vector3(pos.x, pos.y, pos.z);
		switch (dir){
			case Dir.UP:
				desiredPos += Vector3.forward;
				break;
			case dir.DOWN:
				desiredPos += Vector3.back;
				break;
			case dir.LEFT:
				desiredPos += Vector3.left;
				break;
			default:
				desiredPos += Vector3.right;				
			}
		return desiredPos;
	}
	
	function checkBelow(grid:Grid){
		return grid.getSpaceBox(pos+Vector3.down);
	}
	
	function move( dir: Dir, grid: Grid )
	{	
		var fig: Transform= prefab.FindGameObjectWithTag("Rufus").transform;
		var time: float = 0.4;
		var below: SpaceBox;
		if (isMoving ) {;return;}
		if (this.dir != dir){
			this.dir = dir;
			var finalR: float;
			switch (dir){
			case Dir.UP:
				finalR = 0;
				break;
			case dir.DOWN:
				finalR = 2;
				break;
			case dir.LEFT:
				finalR = 1;
				break;
			default:
				finalR = 3;				
			}
			
			fig.transform.RotateAround(fig.transform.position, Vector3.up,90*(this.dirction-finalR));
			//animation possible here
			this.dirction=finalR;
			return;
		}
		
		var x:Vector3=spaceInFront(pos,dir);
		
		/*if (grid.grid[x.x,x.y-1,x.z]==null)
		{
			return;
		}
		
		//Debug.Log("Got here");
		
		below = checkBelow(grid);
		if ( below.type == SType.BOX && (below as Block).bType == BoxType.BUTTON){
			(below as ButtonBox).Release();
		}*/
		
		var target:Vector3 = motionTarget(dir, grid);
		isMoving = true;
		
		var startTime:float = Time.time;
		var startPos:Vector3 = pos;
		var endPos:Vector3 = target;
		if(willJump) { 
			prefab.BroadcastMessage("Jump");
			//Debug.Log(startPos); 
			//Debug.LogError(endPos); 
			yield (WaitForSeconds(.1));
		}
		else prefab.BroadcastMessage("Walk");
		
		/*while (Time.time < startTime + time){
			
			prefab.transform.position = Vector3.Slerp(startPos, endPos, (Time.time - startTime)/time);
			yield;
		}*/
		
		for (var i = 0; i < 3; i++){
			prefab.transform.position = Vector3.Slerp(startPos, endPos, (i+1)/3);
			yield WaitForSeconds(.02);
			//yield;
		}
		
		prefab.BroadcastMessage("Stop");
		pos = endPos;
		var yum: SpaceBox = grid.getSpaceBox(pos);
		if (yum != null && yum.type == SType.EDIBLE)
		{
			if((yum as Edible).eType == EdibleType.DEST)
				grid.state = GridState.FINISHED;
		}
		
		
//		Debug.Log(endPos.ToString());
		var oldBelow=grid.getSpaceBox(startPos+Vector3.down);
		if (startPos!=endPos && oldBelow.type == SType.BOX && (oldBelow as Block).bType == BoxType.BUTTON)
		{
			(oldBelow as ButtonBox).Release();
		}
		

		below = checkBelow(grid);
		
		if (below.type == SType.BOX && (below as Block).bType == BoxType.BUTTON){
			(below as ButtonBox).getPushed();
		}
		isMoving = false;
		willJump = false;
		//Debug.LogError(prefab.transform.position); 
		return;
	}

	
};
