var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/fly-clouds.jpg'){
		myImage.setAttribute ('src','images/Oblaka-AyPetri.jpg');
	} else {
		myImage.setAttribute ('src','images/fly-clouds.jpg');
	}
}

var myButton = document.querySelector('#naming');
var myButtonResume = document.querySelector('#resume');
var myHeading = document.querySelector('h1');

myButtonResume.onclick = function() {
	window.open('resume.html', '_blank');
}

function setUserName() {
	var myName = prompt ('Please enter your name.');
	localStorage.setItem('name',myName);
	myHeading.innerHTML = 'Upwards only sky, eternal blue blue sky, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Upwards only sky, eternal blue blue sky, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}