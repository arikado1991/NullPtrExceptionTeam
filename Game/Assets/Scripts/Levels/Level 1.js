var materialDest:   Material;
var instructions: String[];
function GenerateLevel(grid:Grid){
	var block: SpaceBox;
	var pos: Vector3;
	
	grid.SetGrid(7,10,7);
	
	grid.BuildRect(Vector3(0, 0, 0), Vector3(6,0,6),"box");
	grid.BuildRect(Vector3(0, 1, 0), Vector3(0,2,6),"box");
	grid.BuildRect(Vector3(6, 1, 0), Vector3(6,2,6),"box");
	grid.BuildRect(Vector3(1, 1, 6), Vector3(5,2,6),"box");
	
//	grid.CreateBlock(Vector3(8, 0, 8));
	instructions = ["Use the arrow keys to move\ntoward the spinning radioactive pizza!.\n (Press spacebar for to view more)",
	"What spacebar? How the heck should I know?", "If you don't like how the pizza look? Go and complain on \n 'personal.denison.edu/~lalla'!"];
	
	grid.SpawnCharacter(Vector3(2, 1, 0));
	grid.CreateDestination(Vector3(4,1,4));

}

var instruct: int=0;
function OnGUI(){

	var buttonW:int = 400;
	var buttonH:int = 100;
	if (instruct < instructions.length){
	 GUI.Window (0, Rect(Screen.width/2-buttonW/2, 10, buttonW, buttonH), 
	 InstructionFunction, instructions[instruct]);
	}
}

function InstructionFunction(windowID: int){
	if (Input.GetKeyUp("space"))
		instruct++;
}