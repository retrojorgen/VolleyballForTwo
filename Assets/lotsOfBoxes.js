var thePrefab : GameObject;
var instances = new Array();

function Update () {
	if(Input.GetKeyDown("s")) {
		var instance : GameObject = Instantiate(thePrefab, transform.position, transform.rotation);
		instances.push(instance);
	}
}