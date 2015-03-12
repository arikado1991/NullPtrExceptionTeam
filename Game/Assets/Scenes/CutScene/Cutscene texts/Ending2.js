var bg:Texture;

function Awake(){
		
		this.GetComponent(GUITexture).texture = bg;
		this.GetComponent(RollingScript).texts = [
		"Rufus did not wake up eventually",
		"He was found dead in a dark ally after several weeks",
		"Please TRY AGAIN to collect more PIZZAS so that Rufus can survive"		
		
		];

}

function LoadScene()
{
	Application.LoadLevel("Title");

}