#pragma strict
var levelUnlocked: int;
var pizzaCollected: int;
var eatenPizzaEachLevel: int[];
var darkerTheme: boolean;

function UpdateComplete (level: int, dPizza: int) {
	eatenPizzaEachLevel[level-1] = Mathf.Max(eatenPizzaEachLevel[level-1],dPizza); 
	if (levelUnlocked == level){
		levelUnlocked = level;
		
		
	}
	darkerTheme = (levelUnlocked > 7);
	
	
}