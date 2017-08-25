function getTextBoxInfo(){
  var textBoxText = document.getElementById('inputText').innerHTML;
  var boxCounter = document.getElementsByTagName('input').length - 1;
  if(boxCounter < 0) { boxCounter = 0; }
  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.name = "boxes";
  checkbox.id = "checkBox" + boxCounter;
  var label = document.createElement('label');
  label.htmlFor = "checkbox" + boxCounter;
  label.appendChild(document.createTextNode(textBoxText));
  
  document.getElementById('inputDiv').appendChild(checkbox);
  document.getElementById('inputDiv').appendChild(label);
  
  
  var inputControl = document.createElement('input');
  var inputLabel = document.createElement('label');
  var id = "checkBox"+boxCounter;
  input.setAttribute('type','checkbox');
  input.setAttribute('value',id);
  input.setAttribute('name','boxes');
  input.setAttribute('id',id);
  
  inputLabel.setAttribute('for',id);
  inputLabel.setAttribute('id',id);
  
  inputLabel.appendChild(document.createTextNode(id));
  
  /*https://www.codeschool.com/discuss/t/dynamically-create-checkboxes-with-javascript/26858/2*/
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
