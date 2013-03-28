var thePrefab : GameObject;
var startPosition : float = 0.0;
startPosition = transform.position.x;
var toWhichPlayer = "right";
var currentPosition : float;
var paused : boolean = false;



function OnCollisionEnter (theCollision : Collision) {
		if (theCollision.gameObject.name == "Plane") {
			getNewBall();
			GameObject.Find("gameBallTrail").gameObject.light.intensity = 1;
			GameObject.Find("Player1").rigidbody.velocity = Vector3.zero;
			GameObject.Find("Player1").rigidbody.angularVelocity = Vector3.zero;
			GameObject.Find("Player2").rigidbody.velocity = Vector3.zero;
			GameObject.Find("Player2").rigidbody.angularVelocity = Vector3.zero;
			
			Destroy(gameObject);
		}
		
}


function getNewBall() {
	var instance : GameObject = Instantiate(thePrefab, Vector3(getStartPositionX(),4.862578,-5), transform.rotation);	
}

function getStartPositionX() {
	if (startPosition == -1.65) {
		return -1.95;
	} else {
		return -1.65;
	}
}
 
function keepStable() {
	this.transform.position.z = -5;
}

function updateGameBallTrail() { 
	if(currentPosition < transform.position.y && GameObject.Find("gameBallTrail").gameObject.light.intensity != 0.0) {
		GameObject.Find("gameBallTrail").gameObject.light.intensity -= 0.01;	
	}
	if(currentPosition > transform.position.y) { 
		GameObject.Find("gameBallTrail").gameObject.light.intensity += 0.01;	
	}	
}

function Update () {
	updateGameBallTrail();
	//GameObject.Find("MainCamera").gameObject.transform.position.x = transform.position.x * 0.1;
	GameObject.Find("gameBallTrail").gameObject.transform.position.x = transform.position.x;
	GameObject.Find("GameLight").gameObject.transform.position.x = transform.position.x * 0.4;
	keepStable();
	currentPosition = transform.position.y;
	if(Input.GetKeyDown("p")) {
		Time.timeScale = 0;
		GameObject.Find("Paused1").transform.position.x = 0.5;
		GameObject.Find("Paused2").transform.position.x = 0.5;
		paused = true;
	}
	if(paused) {
		if(Input.GetKeyDown(KeyCode.C)) {
			Time.timeScale = 1;
			GameObject.Find("Paused1").transform.position.x = 40;
			GameObject.Find("Paused2").transform.position.x = 40;
			paused = false;
		}
		if(Input.GetKeyDown(KeyCode.Q)) {
			 Application.Quit();
		}
		if(Input.GetKeyDown(KeyCode.M)) {
			 Application.LoadLevel("MenuScreen");
		}
	}
}

