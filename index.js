// The e is short for event
// The simplest way to create an event is to click somewhere on the page.
// When you click, a click event is triggered. This event is actually an object containing information about the action that just happened.

const btn = document.querySelectorAll('.drum');

const clickListner = (e) => {
	let word = e.key;

	switch (word) {
		case 'w':
			let w = new Audio('sounds/tom-1.mp3');
			w.play();
			break;
		case 'a':
			let a = new Audio('sounds/tom-2.mp3');
			a.play();
			break;
		case 's':
			let s = new Audio('sounds/tom-3.mp3');
			s.play();
			break;
		case 'd':
			let d = new Audio('sounds/tom-4.mp3');
			d.play();
			break;
		case 'j':
			let j = new Audio('sounds/crash.mp3');
			j.play();
			break;
		case 'k':
			let k = new Audio('sounds/kick-bass.mp3');
			k.play();
			break;
		case 'l':
			let l = new Audio('sounds/snare.mp3');
			l.play();
			break;
		default:
			console.log('press right key');
	}
};

// event will listen when the click happens

// for (let i = 0; i < btn.length; i++) {
// 	btn[i].addEventListener('click', clickListner);
// }

// event occurs when certain key is pressed

document.addEventListener('keydown', clickListner);
