function GenerateLevel(grid:Grid){
	var block: SpaceBox;
	var pos: Vector3;
	
	grid.SetGrid(10,11,10);
	for (var i: int=0; i<10; i++){
		for (var j: int=0;j<10;j++){
			
			
			grid.CreateBlock(Vector3(i,0,j));
			grid.CreateBlock(Vector3(i,1,j));
			grid.CreateBlock(Vector3(i,2,j));
			grid.CreateBlock(Vector3(i,3,j));
		}
	}
	
	grid.BuildRect(Vector3(0, 4, 4), Vector3(5,6,9),"box");
	grid.BuildRect(Vector3(0, 6, 7), Vector3(2,8,9),"box");
	
	
	grid.BuildRect(Vector3(0, 4, 0), Vector3(5,4,3),"box");
	grid.BuildRect(Vector3(0, 5, 0), Vector3(3,5,3),"box");
	grid.BuildRect(Vector3(0, 6, 0), Vector3(1,6,3),"box");
	
	grid.CreateIceBlock(Vector3(8, 4, 1));
	grid.CreateIceBlock(Vector3(8, 5, 1));
	grid.CreateIceBlock(Vector3(8, 6, 1));
	grid.CreateIceBlock(Vector3(8, 7, 1));
	
	
	var Block1=[Vector3(6,4,4), Vector3(7,4,4),Vector3(8,4,4),Vector3(9,4,4),Vector3(6,5,4), Vector3(7,5,4),Vector3(8,5,4),Vector3(9,5,4),Vector3(6,6,4), Vector3(7,6,4),Vector3(8,6,4),Vector3(9,6,4)];
	var Block2=[Vector3(6,4,6), Vector3(7,4,6),Vector3(8,4,6),Vector3(9,4,6),Vector3(6,5,6), Vector3(7,5,6),Vector3(8,5,6),Vector3(9,5,6),Vector3(6,6,6), Vector3(7,6,6),Vector3(8,6,6),Vector3(9,6,6)];
	var Block3=[Vector3(6,4,8), Vector3(7,4,8),Vector3(8,4,8),Vector3(9,4,8),Vector3(6,5,8), Vector3(7,5,8),Vector3(8,5,8),Vector3(9,5,8),Vector3(6,6,8), Vector3(7,6,8),Vector3(8,6,8),Vector3(9,6,8)];
	for (i=0;i<12;i++)
	{
		grid.CreateBlock(Block1[i]);
		grid.CreateBlock(Block2[i]);
		grid.CreateBlock(Block3[i]);
	}
	
	var b1=grid.CreateButton(Vector3(5,6,5),Block1,[],false);
	b1.reverse=true;
	b1.mode=1;
	var b2=grid.CreateButton(Vector3(5,6,7),Block2,[],false);
	b2.reverse=true;
	b2.mode=1;
	var b3=grid.CreateButton(Vector3(5,6,9),Block3,[],false);
	b3.reverse=true;
	b3.mode=1;
	
	grid.CreatePizza(Vector3(3,6,2));
	grid.CreatePizza(Vector3(8,8,6));
	grid.CreatePizza(Vector3(9,7,9));
	
	grid.SpawnCharacter(Vector3(9,5,0));
	grid.CreateDestination(Vector3(1, 9, 8));
}

var instruct: int=0;
function OnGUI(){

	var buttonW:int = 400;
	var buttonH:int = 100;
	if (instruct==0){
	 GUI.Window (0, Rect(Screen.width/2-buttonW/2, 10, buttonW, buttonH), InstructionFunction, 
	 	"Try pushing the bottom block.\nIt's pretty fun.\n(Press space to dismiss)");
	}
}

function InstructionFunction(windowID: int){
	if (Input.GetKeyUp("space"))
		instruct++;
}