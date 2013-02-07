var collidePosition = Vector3();

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

function keepStable() {
	this.transform.position.z = -5;
	if(this.transform.position.x < -1.75) {
		this.transform.position.x = -1.75;
	}	
}

function Update() {
	keepStable();
	this.rigidbody.AddForce(Vector3((Input.GetAxis("Horizontal2")*600.0)*Time.deltaTime,0,0));
	if(Input.GetKeyDown("i")) {
		if(Vector3() != collidePosition) {
			if(checkLanding(collidePosition.y)) {
				this.rigidbody.AddForce(Vector3(0,15000.0*Time.deltaTime,0));
				//this.transform.Translate(-0.1,0,0);
			}
		}
	}
	transform.rotation.y = 0;
	transform.rotation.x = 0;
	transform.rotation.z = 0;				
}