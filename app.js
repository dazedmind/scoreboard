
let incrementHomeButtons = Array.from(
	document.querySelectorAll('[data-incrementhome-btn]')
);

let incrementGuestButtons = Array.from(
	document.querySelectorAll('[data-incrementguest-btn]')
);

const homeCounter = document.getElementById('home-counter');
const guestCounter = document.getElementById('guest-counter');

let countHome = 0;
let countGuest = 0;


incrementHomeButtons.map((button) => {
	button.addEventListener('click', (e) => {
		switch (e.target.innerText) {
			case '+1':
				homeCounter.textContent = countHome += 1;
				break;
			case '+2':
				homeCounter.textContent = countHome += 2;
				break;
			case '+3':
				homeCounter.textContent = countHome += 3;
				break;
		}
	});
});

incrementGuestButtons.map((button) => {
	button.addEventListener('click', (e) => {
		switch (e.target.innerText) {
			case '+1':
				guestCounter.textContent = countGuest += 1;
				break;
			case '+2':
				guestCounter.textContent = countGuest += 2;
				break;
			case '+3':
				guestCounter.textContent = countGuest += 3;
				break;
		}
	});
});

const resetBtn = document.getElementById('reset-btn');
const undoBtn = document.getElementById('undo-btn');
const saveBtn = document.getElementById('save-btn');
const scoreList = document.getElementById('save-log');
const list = document.querySelectorAll('score-list');
const clearLog = document.getElementById('hidden-btn');
const listCont = document.getElementById('list-container');

round = 1;

function deleteChild() {
	var e = document.querySelector('ul');
	e.innerText = "";
	scoreList.style.display = 'none';
}

//reset button
resetBtn.addEventListener('click', () => {
	countHome = 0; //sets the counters back to zero
	countGuest = 0;
	homeCounter.textContent = '0'; //sets the text to 0
	guestCounter.textContent = '0';
});


//save button
saveBtn.addEventListener('click', () => {
	let home = homeCounter.textContent;
	let guest = guestCounter.textContent;
	scoreList.style.display = 'block';
	const li = document.createElement('li');
	let newRound = round++;
	li.innerText = newRound + ' QTR' + ' ' + ': ' + home + ' - ' + guest;

	if (newRound == '4') {
		saveBtn.style.cssText = "visibility: hidden;";
		round = 1
	}
	li.classList.add('score-list');
	// li.appendChild(listCont);
	listCont.appendChild(li);
	// clearLog.classList.add("unhide")
	// scoreList.textContent +=
	// 	homeCounter.textContent + ' - ' + guestCounter.textContent;
});


//clear button
clearLog.addEventListener('click', () => {
	saveBtn.style.cssText = "visibility:visible;";
});

