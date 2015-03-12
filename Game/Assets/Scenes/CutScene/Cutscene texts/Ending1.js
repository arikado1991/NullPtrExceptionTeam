var bg:Texture;

function Awake(){
		
		this.GetComponent(GUITexture).texture = bg;
		this.GetComponent(RollingScript).texts = [
		"Two decades later",
		"Rufus woke up eventually",
		"He found himself lying in a hospital bed all alone",
		"He was hit by a bus on his way home twenty years ago",
		"It was too late when he got to the hospital",
		"The doctors did everything they could to save him",
		"He was stablized after a week, but never regain his consciousness.",
		"His wife had waitted for him to wake up long enough",
		"But her patience finnaly wore off after years of waitting",
		"She abondoned him and got married to a rich old man",
		"His only child got arrested for drug trafficking and assaulting",
		"This is the worst ending that could ever happened",
		"Try again to collect more pizzas?"
		];

}

function LoadScene()
{
	Application.LoadLevel("Title");

}