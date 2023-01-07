let date = new Date();

// All necessary variables

var setHour;
var setMinutes;
var setAMPM;
let alarmList = [];
let Time;
var settedTime;

function ringAlarm() {
	alert('Alarm is Ringing');
}

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

	var hours12Format = (hours24Format < 12) ? hours24Format : hours24Format - 12;

	// Taking Minutes

	var minutes = date.getMinutes();
	// Taking Seconds

	var seconds = date.getSeconds();

	// Determine AM & PM

	var ampm = (date.getHours()) < 12 ? 'AM' : 'PM';

	if (hours12Format == 0) {
		hours12Format = 12;
	}

	//Updating Time On Clock's Face

	h2.textContent = addingZero(hours12Format) + ":" + addingZero(minutes) + ":" + addingZero(seconds) + " " + ampm;

	// paas a string into settedTime variable for adding in alarmList

	settedTime = `${addingZero(hours12Format)}:${addingZero(minutes)}:${addingZero(seconds)} ${ampm}`;
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
	} else {
		Time = `${setHour}:${setMinutes}:00 ${setAMPM}`;
		alarmList.push(Time);
	}
}
	// this is to check alarm into the AlarmList Array in every 1 sec
var ring = setInterval(() => {
	if (alarmList.includes(settedTime)) {
		ringAlarm();
	}
}, 1000);

	// Show alarm on list

var list = document.getElementById("list-alarm");
var btn = document.getElementById('set-alarm-btn');
btn.addEventListener('click', () => {
	if (setHour == "hour" || setMinutes == "minute" || setAMPM == "ampm") {
		return;
	} else {
		const listItem =
			`<li class="alarm-time-list">
				<span class="show-setted-alarm">${Time}</span>
				<button id="delete-alarm-btn" class="delete" onclick="removeAlarm(this.value)" value=${Time}>Delete</button>
			</li>`
		list.innerHTML += listItem;
	}
});

	// This is to remove Alarm from Upcoming Alarm list

list.addEventListener('click', e => {
	console.log("removing element")
	if (e.target.classList.contains("delete")) {
		e.target.parentElement.remove();
	}
})


// This is to remove Alarm from alarmList (Array)

removeAlarm = (value) => {
	value += " " + setAMPM;
	let Index = alarmList.findIndex((time) => time === value);
	alarmList.splice(Index, 1);
	console.log(Index, 'index');
}