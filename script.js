let date = new Date();
var currentampm;
var currentTimeHours;
var currentTimeMinutes;
var setHour;
var setMinutes;
var setAMPM;

/* Adding zero Before number which is less than 10 */

function addingZero(para) {
	if (para < 10) {
		return para = "0" + para;
	} else {
		return para;
	}
}

/* Showing Current Time on Clock */

var h2 = document.getElementById('time');

var currentTime = setInterval(function () {

	var date = new Date();
	// Taking Hour
	var hours24Format = date.getHours();

	// Change 24 hour to 12 hour format:

	var hours12Format = (hours24Format<12)? hours24Format: hours24Format - 12;

	// Taking Minutes

	var minutes = date.getMinutes();
	// Taking Seconds

	var seconds = date.getSeconds();

	// Determine the AM & PM

	var ampm = (date.getHours()) < 12 ? 'AM' : 'PM';

	if (hours12Format == 0) {
		hours12Format = 12;
	}

	//Updating Time On Clock Face

	h2.textContent = addingZero(hours12Format) + ":" + addingZero(minutes) + ":" + addingZero(seconds) + " " + ampm;

	currentTimeHours = hours12Format;
	currentTimeMinutes = minutes;
	currentampm = ampm;

}, 1000);

// Creating option for select tag by JAVASCRIPT

var selectMenu = document.querySelectorAll("select");

// Creating Options of Select Tab by Using For Loop

for (let i = 12; i > 0; i--) {
	i = i < 10 ? "0" + i : i;
	var option = `<option value="${i}">${i}</option>`;
	selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i >= 0; i--) {
	i = i < 10 ? "0" + i : i;
	var option = `<option value="${i}">${i}</option>`;
	selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 2; i > 0; i--) {
	let ampm = i == 2 ? "PM" : "AM";
	var option = `<option value="${ampm}">${ampm}</option>`;
	selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

var btn = document.getElementById('set-alarm-btn');
btn.addEventListener('click', setAlarm);

// Gathering Time for Setting alarm
function setAlarm() {
	setHour = document.getElementById('hour').value;
	setMinutes = document.getElementById('minute').value;
	setAMPM = document.getElementById('AMPM').value;
	// check input is corrected or not && if it is incorrect than alert;
	if (setHour == "hour" || setMinutes == "minute" || setAMPM == "ampm") {
		return alert("OOPS !! Enter correct Time!!");
	}
	// Check Current Time is equal to Set Time or !
	 var ring = setInterval(()=>{
		if(currentTimeHours == setHour && currentTimeMinutes == setMinutes && currentampm == setAMPM){
			window.alert("alarm ring");
			clearInterval(ring);
		}
	},1000);

}

// var btn = document.getElementById('set-alarm-btn');
// btn.addEventListener('click', ()=>{
// 	if (setHour == "hour" || setMinutes == "minute" || setAMPM == "ampm") {
// 		return;
// 	}
// 	var list = document.getElementById("list");
	
// 	var span = document.createElement('span');
// 	span.setAttribute('id','alarm-list-div');;
// 	list.appendChild(span);

// 	var div1 = document.getElementById('alarm-list-div');
// 	var li = document.createElement('li');
// 	li.innerText =  setHour + ":" + setMinutes + " " + setAMPM;
// 	div1.appendChild(li);
	
// 	// Create Button by JavaScript for deleting setted alarm
	
// 	var btn1 = document.createElement('button');
// 	btn1.innerHTML = "Delete";
// 	document.getElementById("delete").appendChild(btn1);
// 	btn1.setAttribute('id','delete-btn')
// 	var delete_btn = document.getElementById('delete-btn');
// 	delete_btn.addEventListener('click',()=>{
// 		div1.remove();
// 	});
// });
var btn = document.getElementById('set-alarm-btn');
btn.addEventListener('click', ()=>{
	if (setHour == "hour" || setMinutes == "minute" || setAMPM == "ampm") {
		return;
	}
	var list = document.getElementById("list");
	// var button = document.createElement('button');
	// button.id = 'delete';
	var li = document.createElement('li');
	// var buttonToDelete = document.createElement('button');
	// buttonToDelete.setAttribute('id','delete-button');
	// console.log(buttonToDelete);
	
	li.innerHTML =  setHour + ":" + setMinutes + " " + setAMPM + `<button id="delete-button" onClick="del()">Delete Me!</button>`;
	list.appendChild(li);

	
	// var div1 = document.getElementById('alarm-list-div');
	// var li = document.createElement('li');
	// div1.appendChild(li);
	
	// Create Button by JavaScript for deleting setted alarm
	
	// var btn1 = document.createElement('button');
	// btn1.innerHTML = "Delete";
	// document.getElementById("delete").appendChild(btn1);
	// btn1.setAttribute('id','delete-btn')
	// var delete_btn = document.getElementById('delete-btn');
	// delete_btn.addEventListener('click',()=>{
	// 	div1.remove();
	// });
});

	// function del(){
	// 	var buttonToDelete = document.getElementById('delete-button');
	// 	buttonToDelete.parentNode.remove();
	// }