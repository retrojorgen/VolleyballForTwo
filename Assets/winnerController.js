var currentPosition : int = 0;
var menuItems = new Array ();
var moveBallCounter = 100;
var winnerPercentage : float;
var winnerScore : float;
var numberOfRounds : float = (menuController.configuration.getRoundNumber() - 1) + 0.0;


function Start() {
	menuItems.push(GameObject.Find("PlayAgain"));
	menuItems.push(GameObject.Find("ReturnGameToMenu"));

	if(menuController.configuration.getWinner() == menuController.configuration.getPlayer1Name()) {
		winnerScore = menuController.configuration.getPlayer1Score();
		Debug.Log("player1");
	} else {
		winnerScore = menuController.configuration.getPlayer2Score();
		Debug.Log("player2");
	}
	winnerPercentage = Mathf.Round((((winnerScore*1.0) / (numberOfRounds*1.0)))*100);
	GameObject.Find("Winner").GetComponent(TextMesh).text = menuController.configuration.getWinner() + " won with " + winnerPercentage + "% of points!";

 	var form = new WWWForm();
 	var tweetString = "Congratulations " + menuController.configuration.getWinner() + ". You won with a staggering " + winnerPercentage + "% of available points"; 
    Debug.Log(tweetString);
    form.AddField("tweet", tweetString);
    var w = WWW("http://www.retrojorgen.com/VolleyballForTwo_backend/api.php?type=tweet", form);
	yield w;
 
    if(w.error) {
        print("There was an error getting the data: " + w.error);
    } else {
        Debug.Log(w.text);
    }    
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
	if(currentPosition == 1) {
		Application.LoadLevel("MenuScreen");
	}
	if(currentPosition == 0) {
		Application.LoadLevel("MainGame");
	}
}


function Update () {
if(moveBallCounter == 100) {
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
	}
	
}