var thePrefab : GameObject;
var startPosition : float = 0.0;
startPosition = transform.position.x;
var toWhichPlayer = "right";
var currentPosition : float;



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
	if (startPosition == -1.75) {
		return -1.85;
	} else {
		return -1.75;
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
}

