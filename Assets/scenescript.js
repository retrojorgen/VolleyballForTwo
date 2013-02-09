// When pressed the button, selects the "username" Textfield.
var username : String = "username";
var pwd : String = "a pwd";
function OnGUI () {
    // Set the internal name of the textfield
    GUI.SetNextControlName ("MyTextField");
    
    // Make the actual text field.
    username = GUI.TextField (Rect (10,10,100,20), username);
    GUI.SetNextControlName ("MyTextField2");
    pwd = GUI.TextField (Rect (10,40,100,20), pwd);

    // If the user presses this button, keyboard focus will move.
    if (GUI.Button (Rect (10,70,80,20), "Move Focus"))
        GUI.FocusControl ("MyTextField");
    if (GUI.Button (Rect (10,100,80,20), "Move Focus2"))
        GUI.FocusControl ("MyTextField2");        
}
function Update() { 
	Debug.Log(this.username);
	if(this.username.Length == 0) {
	} else {
		GameObject.Find("inputText").GetComponent(TextMesh).text = this.username;
		GameObject.Find("inputString").GetComponent(TextMesh).text = this.pwd;
	}	
}