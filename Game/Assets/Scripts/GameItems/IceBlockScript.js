#pragma strict

var grid:Grid;
var oldPos: Vector3;

function setGrid(g:Grid){grid = g;}

var box:IceBlock;
function setBox(b:IceBlock){
	box = b; 
	oldPos = transform.position;
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
	
function canMove(dir:Dir):boolean{
	return grid.hasStandable(spaceInFront(transform.position, dir));
}

function roundPos(){
	transform.position.x = Mathf.RoundToInt(transform.position.x);
	transform.position.y = Mathf.RoundToInt(transform.position.y);
	transform.position.z = Mathf.RoundToInt(transform.position.z);
	
}


function slide(dir:Dir){
	//Debug.Log("Ice trying to slide");
	roundPos();
	oldPos = transform.position;
	var j:int=1;
	var topBlocks = new IceBlock[10];
	while (grid.hasIce(Vector3(oldPos.x, oldPos.y+j, oldPos.z)))
		{

		var b: IceBlock = grid.getSpaceBox(Vector3(oldPos.x, oldPos.y+j, oldPos.z));
		topBlocks[j-1]=b;
		j+=1;
		}	
		
	if (canMove(dir)){
		var below: SpaceBox = grid.getSpaceBox(oldPos + Vector3.down);
		if (below != null && (below as Block).bType ==  BoxType.BUTTON){
			(below as ButtonBox).Release();
		}
	}
	while (canMove(dir)){
		grid.grid[oldPos.x, oldPos.y, oldPos.z] = null;
		var start:Vector3 = transform.position;
		var end:Vector3 = spaceInFront(start, dir);
		
		for (var i = 0; i < 3; i++){
			transform.position = Vector3.Slerp(start, end, (i+1)/3.0);
			//Debug.Log(topBlocks[1].prefab.transform.position);
			
			for (var q=1;q<j;q++){
			grid.grid[oldPos.x, oldPos.y+q, oldPos.z]=null;
			topBlocks[q-1].prefab.transform.position= Vector3.Slerp(start+Vector3.up*q, end+Vector2.up*q, (i+1)/3.0);
			}
			yield WaitForSeconds(.02);
		}
		
		
		
		roundPos();
		var p:Vector3 = transform.position;
		grid.grid[p.x, p.y, p.z] = box;
		below = grid.getSpaceBox(p + Vector3.down);
		if (below != null && (below as Block).bType ==  BoxType.BUTTON){
			(below as ButtonBox).getPushed();
		}
		
		for ( q=1;q<j;q++){
		grid.grid[p.x, p.y+q, p.z] = topBlocks[q-1];
		}
		oldPos = p;
	}


	
	

}