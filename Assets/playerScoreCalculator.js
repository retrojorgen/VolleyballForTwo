function Start () {
	GameObject.Find("Player1Score").guiText.text = "" + menuController.configuration.getPlayer1Score() + "/" + menuController.configuration.getRounds();
	GameObject.Find("Player2Score").guiText.text = "" + menuController.configuration.getPlayer2Score() + "/" + menuController.configuration.getRounds();
	GameObject.Find("Player1ScoreLabel").guiText.text = "" + menuController.configuration.getPlayer1Name() + " score";
	GameObject.Find("Player2ScoreLabel").guiText.text = "" + menuController.configuration.getPlayer2Name() + " score";
}


function OnCollisionEnter (theCollision : Collision) {
	if(theCollision.gameObject.name.Length >= 8) {
		if(theCollision.gameObject.name.Substring(0,8) == "gameBall") {
			if(theCollision.transform.position.x >= -1.75) {
				menuController.configuration.setPlayer1Score(menuController.configuration.getPlayer1Score() + 1);
				GameObject.Find("Player1Score").guiText.text = "" + menuController.configuration.getPlayer1Score() + "/" + menuController.configuration.getRounds();
			} else {
				menuController.configuration.setPlayer2Score(menuController.configuration.getPlayer2Score() + 1);
				GameObject.Find("Player2Score").guiText.text = "" + menuController.configuration.getPlayer2Score() + "/" + menuController.configuration.getRounds();				

			}
		}
	}	
}

function Update () {
	GameObject.Find("Player1ScoreLabel").guiText.text = "" + menuController.configuration.getPlayer1Name() + " score";
	menuController.configuration.setPlayer1Name(menuController.configuration.getPlayer1Name());

	if(menuController.configuration.getPlayer1Score() == menuController.configuration.getRounds()) {
		menuController.configuration.setWinner(menuController.configuration.getPlayer1Name());
		Application.LoadLevel("WinnerScreen");
	}
	if(menuController.configuration.getPlayer2Score() == menuController.configuration.getRounds()) {
		menuController.configuration.setWinner(menuController.configuration.getPlayer2Name());
		Application.LoadLevel("WinnerScreen");
	}	
}