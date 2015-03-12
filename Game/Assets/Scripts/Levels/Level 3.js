var materialDest:   Material;

function GenerateLevel(grid:Grid){
	var block: SpaceBox;
	var pos: Vector3;
	grid.SetGrid(11,10,10);
	for (var i: int=0; i<11; i++){
		for (var j: int=0;j<10;j++){
			grid.CreateBlock(Vector3(i,0,j));
			if (i==0)
			{
				grid.CreateBlock(Vector3(i,1,j));
				grid.CreateBlock(Vector3(i,2,j));
				grid.CreateBlock(Vector3(i,3,j));
			}
			if (i==10)
			{
				grid.CreateBlock(Vector3(i,1,j));
				grid.CreateBlock(Vector3(i,2,j));
				grid.CreateBlock(Vector3(i,3,j));
			}
			if (j>=5)
			{
				grid.CreateBlock(Vector3(i,1,j));
				grid.CreateBlock(Vector3(i,2,j));
			}
			
		}
	}
	
	grid.SpawnCharacter(Vector3(1,9,1));
	grid.CreateIceBlock(Vector3(3,1,2));
	grid.CreateDestination(Vector3(5, 3, 8));
	grid.CreatePizza(Vector3(2,3,7));
	grid.CreatePizza(Vector3(10,4,1));
}


function setDestination(grid:Grid, location:Vector3){
	grid.getSpaceBox(location).destination=true;
	grid.getSpaceBox(location).prefab.transform.GetChild(7).renderer.material=materialDest;
}

var windowRect : Rect = Rect (Screen.width/2-150, 10, 300, 200);
var buttonW:int = 200;
var buttonH:int = 100;
var instruct: int=0;
function OnGUI(){
	if (instruct==0){
	 GUI.Window (0, Rect(Screen.width/2-150, 10, 300, 60), InstructionFunction, "Press Z to push the green cube\n (Press space to continue)");
	 }
	if (instruct==1){
	 GUI.Window (0, Rect(Screen.width/2-150, 10, 300, 60), InstructionFunction, "Step on it to climb the cliff\n");
	}
}

function InstructionFunction(windowID: int){
	if (Input.GetKeyUp("space"))
	{
		instruct+=1;
	}
}