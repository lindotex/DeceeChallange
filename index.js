// Ramdom dice move
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var ramdomDiceImage = 'dice' + randomNumber1 + '.png';
var ramdomDiceImage2 = 'dice' + randomNumber2 + '.png';

var ramdomImageSource = './images/' + ramdomDiceImage;
var ramdomImageSource2 = './images/' + ramdomDiceImage2;

var image1 = document.querySelectorAll('img')[0];
var image2 = document.querySelectorAll('img')[1];

image1.setAttribute('src', ramdomImageSource);
image2.setAttribute('src', ramdomImageSource2);

// Who is winning?

if (randomNumber1 > randomNumber2) {
	document.querySelector('h1').innerHTML = '  🚩 Play 1 wins!';
} else if (randomNumber2 > randomNumber1) {
	document.querySelector('h1').innerHTML = ' Play 2 wins! 🚩';
} else {
	document.querySelector('h1').innerHTML = ' Refresh Me!';
}

function ChangeBG() {
	window.location.reload();
}
