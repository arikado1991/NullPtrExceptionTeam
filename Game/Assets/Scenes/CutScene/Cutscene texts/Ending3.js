var bg:Texture;

function Awake(){
		
		this.GetComponent(GUITexture).texture = bg;
		this.GetComponent(RollingScript).texts = [
		"At last, Rufus woke up in an ICU",
		"His beloved wife thought he was almost gone",
		"She then told him what had happened to him",
		"He was hit by a car on his way to work",
		"The driver hit him was a teenager boy who stole his parents' car to run away from home",
		"When the accident happened, the boy was so scared that he just drove off",
		"Rufus was immediately sent to a hospital",
		"He ragained his consciousness the second day",
		"Rufus completely recovered from the accident after a week",
		"The END~"	
		];

}

function LoadScene()
{
	Application.LoadLevel("Title");

}