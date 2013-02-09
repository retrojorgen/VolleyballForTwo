class MainConfiguration {
	var rounds : int;
	var mode = new Array();
	var currentGameMode: int = 0;
	var player1Name : String = "Player1";
	var player2Name : String = "Player2";
	var player1Score : int = 0;
	var player2Score : int = 0;
	var winner : String = "";
	function setRounds(gameRounds : int) {
		this.rounds = gameRounds;
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