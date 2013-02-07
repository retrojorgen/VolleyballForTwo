var currentPosition : int = 0;
var menuItems = new Array ();
var moveBallCounter = 100;
static var Winner : String;

class MainConfiguration {
	var rounds : int;
	var mode = new Array();
	var currentGameMode: int = 0;
	function setRounds(gameRounds : int) {
		this.rounds = gameRounds;
	}
	function setGameMode(gameMode) {
	}
	function addGameMode(newGameMode) {
		this.mode.push(newGameMode);
	}
	function getRounds() {
		return this.rounds;
	}
	function getMode() {
		return this.mode;
	}
	function getCurrentGameMode() {
		return mode[this.currentGameMode];
	}
}				

static var configuration = new MainConfiguration();

function getConfiguration () {
	return configuration;
}

function Start() {
	menuItems.push(GameObject.Find("SelectGameMode"));
	menuItems.push(GameObject.Find("SelectRounds"));
	menuItems.push(GameObject.Find("PlayGame"));
	configuration.setRounds(21);
	GameObject.Find("CurrentNumberOfRounds").GetComponent(TextMesh).text = "<" + configuration.getRounds() + ">";
	GameObject.Find("CurrentGameMode").GetComponent(TextMesh).text = "<" + configuration.getCurrentGameMode() + ">";
	configuration.addGameMode("Classic");
	
}

function movePosition(movement : boolean) {
	if(!movement) {
		if(currentPosition != 0) {
			currentPosition--;
		} else {
			currentPosition = menuItems.length-1;
		}
	} else {
		if(currentPosition == menuItems.length-1) {
			currentPosition = 0;
		} else {
			currentPosition++;
		}
	}
	moveForwardMenuItem();
}
function moveForwardMenuItem() {
	for(var i = 0; i < menuItems.length; i++) {
		menuItems[i].GetComponent(TextMesh).offsetZ = 0;
	}
	menuItems[currentPosition].GetComponent(TextMesh).offsetZ = -3;	
}
function checkIfGameCanStart() {
	if(currentPosition == 2) {
		Application.LoadLevel("MainGame");
	}
}
function toggleProperty(movement : boolean) {
	if (currentPosition == 0) {
	}
	if (currentPosition == 1) {
		var rounds : int = configuration.getRounds();
		Debug.Log(rounds);
		if(!movement) {
			rounds++;
			configuration.setRounds(rounds);

		} else {
			if(rounds == 1) {}
			else {
				rounds--;
				configuration.setRounds(rounds);
			}
		}
		GameObject.Find("CurrentNumberOfRounds").GetComponent(TextMesh).text = "<" + configuration.getRounds() + ">";
	}
}

function Update () {
GameObject.Find("BackgroundRoom").transform.rotation.x -= 0.001;
GameObject.Find("BackgroundRoom").transform.rotation.y -= 0.003;

if(moveBallCounter == 100) {
	Debug.Log(moveBallCounter);
	GameObject.Find("BackgroundRoomBall").rigidbody.AddForce(Vector3(-400.0,-100.0,-100.0));
	moveBallCounter = 0;
}
moveBallCounter++;

if(Input.anyKeyDown) {
		if(Input.GetKeyDown(KeyCode.UpArrow)) {
			movePosition(false); //move key backwards
		}
		if(Input.GetKeyDown(KeyCode.DownArrow)) {
			movePosition(true); //move key backwards
		}		
		if(Input.GetKeyDown(KeyCode.Return)) {
			checkIfGameCanStart();
		}
		if(Input.GetKeyDown(KeyCode.LeftArrow)) {
			toggleProperty(true);
		}
		if(Input.GetKeyDown(KeyCode.RightArrow)) {
			toggleProperty(false);
		}	
	}
	
}