function getTextBoxInfo(){
	var textBoxText = document.getElementById('inputText').value;
	var boxCounter = document.getElementsByTagName('input').length - 1;
	if(boxCounter < 0) { boxCounter = 0; }
	var checkBox = new makeBox(boxCounter);
	var label = new makeLabel(boxCounter);
	label.appendChild(document.createTextNode(textBoxText));
	var newLine = document.createElement('br');
	document.getElementById('inputDiv').appendChild(checkBox);
	document.getElementById('inputDiv').appendChild(label);
	document.getElementById('inputDiv').appendChild(newLine);
	clearText();
	
	var checkID = "checkBox"+boxCounter;
	var checkBox = document.getElementById(checkID);
	checkBox.checked = false;
	checkBox.onchange = function() { if(this.checked == true){window.alert('checked!');} };
};

function makeBox(n){
	var checkID = "checkBox"+n;
    var inputControl = document.createElement('input');
    inputControl.setAttribute('type','checkbox');
  	inputControl.setAttribute('value',checkID);
  	inputControl.setAttribute('name','boxes');
  	inputControl.setAttribute('id',checkID);
    return inputControl;
};

function makeLabel(n){
	var checkID = "checkBox"+n;
	var labelID = "label"+n;
	var inputLabel = document.createElement('label');
	inputLabel.setAttribute('for',checkID);
	inputLabel.setAttribute('id',labelID);
	inputLabel.style.fontSize = "xx-large";
	inputLabel.style.padding = "10px";
	inputLabel.style.fontWeight = "normal";
	return inputLabel;
};

function setHeaderText(){
	var greeting = "Hello";
	var currentHour = new Date().getHours();
	if(currentHour < 8) { greeting = "Top of the Morning";}
	else if(currentHour < 12) { greeting = "Good Morning"; }
	else if(currentHour == 12) { greeting = "Good Day"; }
	else if(currentHour > 12 && currentHour < 17) { greeting = "Good Afternoon"; }
	else if(currentHour > 16 && currentHour < 24) { greeting = "Good Evening"; }
	document.getElementById("mainHeader").innerHTML = greeting;
};

function getBackground(){
	var backgrounds = 14;
	var num = Math.ceil(Math.random() * backgrounds);
	document.body.background = 'images/bg' + num + '.jpg';
	document.body.style.backgroundSize = "cover";
};

function clearText(){
	document.getElementById('inputText').value = "";
};

function setTimeKeeper(){
	var goTime = new Date();
	var hour = goTime.getHours();
	var minutes = goTime.getMinutes();
	if(minutes < 10) { minutes = "0" + minutes; }
	if(hour > 12) hour = hour - 12;
	var timeDisplay = hour + ":" + minutes;
	document.getElementById("timeKeeper").innerHTML = timeDisplay;
}
setInterval(setTimeKeeper,10000);
