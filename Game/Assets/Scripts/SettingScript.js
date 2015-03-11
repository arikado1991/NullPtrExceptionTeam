#pragma strict
var AllPrefabs: GameObject[];
var bgMusic: AudioClip;
var totalPizzaCollected: int = 0;

function Awake(){ DontDestroyOnLoad(this);}
function FetchPrefabs(){
	return AllPrefabs;
}

function FetchPlayMusic(){
	return bgMusic;
}