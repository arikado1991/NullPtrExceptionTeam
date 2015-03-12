function GenerateLevel(grid:Grid){
	var block: SpaceBox;
	var pos: Vector3;
	
	grid.SetGrid(15,10,15);
	for (var i: int=0; i<15; i++){
		for (var j: int=0;j<15;j++){
			if (j<6 && (i==5 || i==6 || i==7))
			{
				if(j==3 && i!=8){
				grid.CreateBlock(Vector3(i,3,j));}
				continue;
			}
			grid.CreateBlock(Vector3(i,0,j));
			grid.CreateBlock(Vector3(i,1,j));
			
			if (j>=6 && i<=10)
			{
				grid.CreateBlock(Vector3(i,2,j));
				grid.CreateBlock(Vector3(i,3,j));
				grid.CreateBlock(Vector3(i,4,j));
			}
			
		}
	}
	grid.CreateBlock(Vector3(8,2,3));
	grid.CreateIceBlock(Vector3(1, 2, 3));
	var button:Block=grid.CreateButton(Vector3(13,1,5),[Vector3(11,2,7),Vector3(11,3,8),Vector3(11,4,9)],[],false);
	
	grid.SpawnCharacter(Vector3(1,5,1));
	grid.CreateDestination(Vector3(10, 5, 7));
	
	grid.CreatePizza(Vector3(6,4,3));
	grid.CreatePizza(Vector3(0,5,6));
	grid.CreatePizza(Vector3(11,4,8));
}

var instruct: int=0;
function OnGUI(){

	var buttonW:int = 400;
	var buttonH:int = 100;
	if (instruct==0){
	 GUI.Window (0, Rect(Screen.width/2-buttonW/2, 10, buttonW, buttonH), InstructionFunction, 
	 	"You're on your own now.\n(Press space to dismiss)");
	}
}

function InstructionFunction(windowID: int){
	if (Input.GetKeyUp("space"))
		instruct++;
}