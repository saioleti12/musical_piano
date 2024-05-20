let myKeys = document.querySelectorAll('.key');


for (let x = 0; x < myKeys.length; x++) {
    myKeys[x].addEventListener('click', function () {
		// alert("button " + myKeys[x].innerHTML + " is clicked");
		// let snd = new Audio('doremi/do.mp3');
		// snd.play();
		// playSnd('f');
		playSnd(myKeys[x].innerHTML.toLowerCase());

    })
}

// document.addEventListener('keydown', function (btn) {

// 	playSnd(btn.key.toLowerCase());

// 	let pressed_key = btn.key.toLowerCase();

// 	for (let x = 0; x < myKeys.length; x++ ) {
// 		myKeys[x].classList.remove('activated');
// 	}

// 	for (let x = 0; x < myKeys.length; x++ ) {
// 		if (pressed_key == myKeys[x].innerHTML.toLowerCase()) {
// 			myKeys[x].classList.add('activated');
// 		}
// 	}

// })
document.addEventListener('keydown', function(btn){
    playSnd(btn.key.toLowerCase());
    let pressed_key = btn.key.toLowerCase();

    for( x=0; x<myKeys.length; x++ ){
        myKeys[x].classList.remove('activated');
    }
    for( x=0; x<myKeys.length; x++ ){
       if (pressed_key == myKeys[x].innerHTML.toLowerCase()){
        myKeys[x].classList.add('activated');
       }
    }


})

function playSnd(key) {
	switch (key) {
		case 'q':
			var snd = new Audio('doremi/do.mp3');
			snd.play();
			break;
		case 'w':
			var snd = new Audio('doremi/re.mp3');
			snd.play();
			break;
		case 'e':
			var snd = new Audio('doremi/mi.mp3');
			snd.play();
			break;
		case 'r':
			var snd = new Audio('doremi/fa.mp3');
			snd.play();
			break;
		case 't':
			var snd = new Audio('doremi/sol.mp3');
			snd.play();
			break;
		case 'y':
			var snd = new Audio('doremi/la.mp3');
			snd.play();
			break;
		case 'u':
			var snd = new Audio('doremi/ti.mp3');
			snd.play();
			break;
		case 'i':
			var snd = new Audio('doremi/doh.mp3');
			snd.play();
			break;
		default:
			console.log(key);
	}
}










