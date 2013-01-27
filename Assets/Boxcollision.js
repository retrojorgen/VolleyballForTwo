var collidePosition = Vector3();

function OnCollisionEnter (theCollision : Collision) {
		if(theCollision.gameObject.name == "Plane") {
			collidePosition = this.transform.position;
			Debug.Log(collidePosition);
		}
}

function checkLanding(yPosition) {

	var currentPosition = this.transform.position.y;
	Debug.Log(currentPosition + ", " + yPosition); 
	if(yPosition < (currentPosition + 0.15) && yPosition > (currentPosition -0.15)) {
		Debug.Log("match");
		return true;
	}
	return false;
	
}

function Update() {
	if(Input.GetKey("d")) {
		//this.transform.Translate(0.1,0,0);
		this.rigidbody.AddForce(Vector3(10.0,0,0));
	}
	if(Input.GetKey("a")) {
		this.rigidbody.AddForce(Vector3(-10.0,0,0));
		//this.transform.Translate(-0.1,0,0);
	}
	if(Input.GetKeyDown("w")) {
		if(Vector3() != collidePosition) {
			if(checkLanding(collidePosition.y)) {
				this.rigidbody.AddForce(Vector3(0,200.0,0));
				//this.transform.Translate(-0.1,0,0);
			}
		}
	}			
}