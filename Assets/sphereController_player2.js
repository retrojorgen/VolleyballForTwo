var collidePosition = Vector3(0,0.8,0.0);
var previousPositionHack : float = 1.0;

function OnCollisionEnter (theCollision : Collision) {
		if(theCollision.gameObject.name == "Plane") {
			collidePosition = this.transform.position;
		}
}

function checkLanding(yPosition) {

	var currentPosition = this.transform.position.y; 
	if(yPosition < (currentPosition + 0.15) && yPosition > (currentPosition -0.15)) {
		return true;
	}
	return false;
	
}

function Start() {
	previousPositionHack = 1.0;
}

function keepStable() {
	this.transform.position.z = -5;	
}

function Update() {
	keepStable();
	this.rigidbody.AddForce(1400*Input.GetAxis("Horizontal2")*Time.deltaTime,0,0);
	if(Input.GetKeyDown("i")) {
		if(Vector3() != collidePosition) {
			if(checkLanding(collidePosition.y)) {
				this.rigidbody.AddForce(Vector3(0,15000.0*Time.deltaTime,0));
			}
		}
	}
	transform.rotation.z = 0;
	transform.rotation.x = 0;
}