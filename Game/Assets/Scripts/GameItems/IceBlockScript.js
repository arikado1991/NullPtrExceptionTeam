#pragma strict

var grid:Grid;
function setGrid(g:Grid){grid = g;}


var box:IceBlock;
function setBox(b:IceBlock){box = b;}

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
	var target:Vector3 = spaceInFront(transform.position, dir);
	if (grid.hasStandable(target)){
		return false;
	}else{
		return true;
	}
}

function roundPos(){
	transform.position.x = Mathf.RoundToInt(transform.position.x);
	transform.position.y = Mathf.RoundToInt(transform.position.y);
	transform.position.z = Mathf.RoundToInt(transform.position.z);
	
}

function slide(dir:Dir){
	Debug.Log("Ice trying to slide");
	roundPos();
	grid.CreateTile(transform.position);
	while (canMove(dir)){
		var start:Vector3 = transform.position;
		var end:Vector3 = spaceInFront(start, dir);
		for (var i = 0; i < 3; i++){
			transform.position = Vector3.Slerp(start, end, (i+1)/3.0);
			yield WaitForSeconds(.05);
		}
		roundPos();
	}
	roundPos();
	var p:Vector3 = transform.position;
	grid.grid[p.x, p.y, p.z] = box;

}