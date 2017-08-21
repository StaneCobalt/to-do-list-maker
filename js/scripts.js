function getTextBoxInfo(){
  var textBoxText = document.getElementById('inputText').innerHTML;
  var boxCounter = document.getElementsByTagName('input').length - 2;
  if(boxCounter < 0) { boxCounter = 0; }
  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.name = "name";
  checkbox.value = textBoxText;
  checkbox.id = "checkBox" + boxCounter;

  var label = document.createElement('label')
  label.htmlFor = "id";
  label.appendChild(document.createTextNode('text for label after checkbox'));

  container.appendChild(checkbox);
  container.appendChild(label);
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
	if(hour > 12) hour = hour - 12;
	var timeDisplayer = hour + ":" + goTime.getMinutes();
	document.getElementById("timeKeeper").innerHTML = timeDisplayer;
};
