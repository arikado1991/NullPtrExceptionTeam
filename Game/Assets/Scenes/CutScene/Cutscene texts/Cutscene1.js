#pragma strict


//
var bg:Texture;

function Awake(){
		
		
		this.GetComponent(GUITexture).texture = bg;
		
		this.GetComponent(RollingScript).texts = ["<Rufus, half awaken and confused. He hears a voice talking to him>", "Rufus!", 
		"Rufus, wake up!", 
		"No I am not God.",
		"Nor who I am is what important right now.", 
		"No. You're not dead yet.", 
		"But you will be if you don't hurry up.",
		"Your oxygen supplier is broken!",
		"Forget about your web browser history! ",
		"You need to wake up ...",
		"...and get help!",
		"No! One doesn't simply wake up!",
		"You must go towards the pizza slice.",
		"Do not question me!",

		"You need to wake up ...and get help!",

		"... You're about to die. Hurry!"
		];

}
function Start()
{
	
}


function LoadScene()
{
	Application.LoadLevel("Level 1");

}

