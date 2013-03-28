var currentPosition : int = 0;
var menuItems = new Array ();
var moveBallCounter = 100;
static var Winner : String;
var player1Name : String = "@Player1";
var player2Name : String = "@Player2";
static var configuration;

function Start() {
	configuration = new MainConfiguration();
	menuItems.push(GameObject.Find("SelectRounds"));
	menuItems.push(GameObject.Find("Player1NameObject"));
	menuItems.push(GameObject.Find("Player2NameObject"));
	menuItems.push(GameObject.Find("PlayGame"));
	configuration.setRounds(21);
	GameObject.Find("CurrentNumberOfRounds").guiText.text = "<" + configuration.getRounds() + ">";
	configuration.addGameMode("Classic");
	menuItems[currentPosition].guiText.material.color = Color.magenta;
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
		menuItems[i].guiText.material.color = Color.white;
	}
	Debug.Log("Changing color");
	menuItems[currentPosition].guiText.material.color = Color.magenta;
}
function checkIfGameCanStart() {
	if(currentPosition == 3) {
		Application.LoadLevel("MainGame");
	}
}
function toggleProperty(movement : boolean) {
	if (currentPosition == 0) {
		var rounds : int = configuration.getRounds();
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
		GameObject.Find("CurrentNumberOfRounds").guiText.text = "<" + configuration.getRounds() + ">";
	}
}
function toggleText(type : String, playername : String, key : String) {
	switch(type) {
		case "Backspace" :
			return "@" + playername.Substring(1,(playername.Length-2));
		break;
		case "Key" :
			return playername + key;
		default:
		break;
	}
}
function Update () {
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
		if(currentPosition == 1 || currentPosition == 2) {
			if(currentPosition == 1) {
				if(Input.GetKey(KeyCode.Backspace)) {
					configuration.setPlayer1Name(toggleText("Backspace", configuration.getPlayer1Name(), ""));
				} else {
					if(Input.inputString != "") {
						configuration.setPlayer1Name(toggleText("Key", configuration.getPlayer1Name(),Input.inputString));
					}
				}
			} else {
				if(Input.GetKeyDown(KeyCode.Backspace)) {
					configuration.setPlayer2Name(toggleText("Backspace", configuration.getPlayer2Name(), ""));
				} else {
					if(Input.inputString != "") {
						configuration.setPlayer2Name(toggleText("Key", configuration.getPlayer2Name(),Input.inputString));
					}
				}				
			}
		}			
	}
	GameObject.Find("PlayerName1").guiText.text = configuration.getPlayer1Name();
	GameObject.Find("PlayerName2").guiText.text = configuration.getPlayer2Name();
}

class MainConfiguration {
	var rounds : int;
	var mode = new Array();
	var currentGameMode: int = 0;
	var player1Name : String = "@Player1";
	var player2Name : String = "@Player2";
	var player1Score : int = 0;
	var player2Score : int = 0;
	var winner : String = "";
	var roundNumber : int  = 1;
	function setRounds(gameRounds : int) {
		this.rounds = gameRounds;
	}
	function incrementRoundNumber() {
		this.roundNumber++;
	}
	function getRoundNumber() {
		return this.roundNumber;
	}
	function setGameMode(gameMode : int) {
	}
	function addGameMode(newGameMode : String) {
		this.mode.push(newGameMode);
	}
	function getRounds() {
		return this.rounds;
	}
	function getMode() {
		return this.mode;
	}
	function getCurrentGameMode() {
		return this.mode[this.currentGameMode];
	}
	function getPlayer1Name() {
		return this.player1Name;
	}
	function getPlayer2Name() {
		return this.player2Name;
	}	
	function setPlayer1Name(name : String) {
		this.player1Name = name;
	}
	function setPlayer2Name(name : String) {
		this.player2Name = name;
	}
	function getWinner() {
		return this.winner;
		Debug.Log(this.winner);
	}
	function getWinnerScore() {
		if (this.player1Score > this.player2Score) {
			return this.player1Score;
			Debug.Log(this.player1Score);
		} else {
			return this.player2Score;
			Debug.Log(this.player2Score);
		}
	}
	function setWinner(player : String) {
		this.winner = player;
	}
	function getPlayer1Score() {
		return this.player1Score;
	}
	function setPlayer1Score(score : int) {
		this.player1Score = score;
	}
	function getPlayer2Score() {
		return this.player2Score;
	}
	function setPlayer2Score(score : int) {
		this.player2Score = score;
	}	
}
