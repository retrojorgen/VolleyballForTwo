#pragma strict

function Start () {
	GameObject.Find("Player1Score").guiText.text = "" + Player1Score + "/" + menuController.configuration.getRounds();
	GameObject.Find("Player2Score").guiText.text = "" + Player2Score + "/" + menuController.configuration.getRounds();
}

var Player1Score : int = 0;
var Player2Score : int = 0;


function OnCollisionEnter (theCollision : Collision) {
	if(theCollision.gameObject.name.Length >= 8) {
		if(theCollision.gameObject.name.Substring(0,8) == "gameBall") {
			if(theCollision.transform.position.x >= -1.75) {
				Player1Score++;
				GameObject.Find("Player1Score").guiText.text = "" + Player1Score + "/" + menuController.configuration.getRounds();
			} else {
				Player2Score++;
				GameObject.Find("Player2Score").guiText.text = "" + Player2Score + "/" + menuController.configuration.getRounds();				
			}
		}
	}	
}

function Update () {
	
	if(Player1Score == menuController.configuration.getRounds()) {
		menuController.Winner = "Player1";
		Application.LoadLevel("WinnerScreen");
	}
	if(Player2Score == menuController.configuration.getRounds()) {
		menuController.Winner = "Player2";
		Application.LoadLevel("WinnerScreen");
	}
}