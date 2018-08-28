var playerOnePaddle = { 
height: 160,
width: 20,
speed: 0,
position: 460,
point: 0,
color: "",
}


var playerTwoPaddle = {
height: 160,
width: 20,
speed: 0,
position: 460,
point: 0,
color: "",

}


var ball = {
yAxis: 510,
xAxis: 820,
yValueSpeed: 0,
xValueSpeed: 0,
radius: 25,

}




function startGame() {
	ball.yAxis = 510;
	ball.xAxis = 820;
	var leftOrRight

	if (Math.random() < 0.5) {
		var leftOrRight = 1
	} else {
		var leftOrRight = -1
	}
	ball.yValueSpeed = Math.random() * 2 + 3;
	ball.xValueSpeed = leftOrRight * (Math.random() * 2 + 3);
};



document.addEventListener('keydown', function (e) {
     if (e.keyCode == 87 || e.which == 87) { // W key
      playerOnePaddle.speed = -10;
     }
     if (e.keyCode == 83 || e.which == 83) { // S Key
      playerOnePaddle.speed = 10;
     }
     if (e.keyCode == 38 || e.which == 38) { // up arrow
      playerTwoPaddle.speed = -10;
     }
     if (e.keyCode == 40 || e.which == 40) { // down arrow
      playerTwoPaddle.speed = 10;
     }
}, false);



document.addEventListener('keyup', function (e) {
	if (e.keyCode == 87 || e.which == 87) {
		playerOnePaddle.speed = 0;
	}
	if (e.keyCode == 83 || e.which == 83) {
		playerOnePaddle.speed = 0;
	}
	if (e.keyCode == 38 || e.which == 38) {
		playerTwoPaddle.speed = 0;
	}
	if (e.keyCode == 40 || e.which == 40) {
		playerTwoPaddle.speed = 0;
	}
}, false);



window.setInterval(function makeStuffMove() {
	playerOnePaddle.position += playerOnePaddle.speed;
	playerTwoPaddle.position += playerTwoPaddle.speed;
	ball.yAxis += ball.yValueSpeed;
	ball.xAxis += ball.xValueSpeed;




	if (playerOnePaddle.position <= 160) {
		playerOnePaddle.position = 160;
	}
	if (playerTwoPaddle.position <= 160) {
		playerTwoPaddle.position = 160;
	}
	if (playerOnePaddle.position >= window.innerHeight - playerOnePaddle.height) {
		playerOnePaddle.position = window.innerHeight - playerOnePaddle.height;
	}
	if (playerTwoPaddle.position > window.innerHeight - playerTwoPaddle.height) {
		playerTwoPaddle.position = window.innerHeight - playerTwoPaddle.height;
	}





	if (ball.yAxis <= 160 || ball.yAxis >= window.innerHeight - ball.radius) {
		ball.yValueSpeed = -ball.yValueSpeed
	}




	if (ball.xAxis <= playerOnePaddle.width) {
		if (ball.yAxis > playerOnePaddle.position && ball.yAxis < playerOnePaddle.position + playerOnePaddle.height) {
			ball.xValueSpeed = -ball.xValueSpeed+2; 




		} else {
			playerOnePaddle.point++;
			if (playerOnePaddle.point == 3){
			document.getElementById('pong').innerHTML = "Player Two Wins!";
				document.getElementById("pong").style.left = 25 + "%";

		}
			startGame();}}



	if (ball.xAxis >= window.innerWidth - ball.radius - playerTwoPaddle.width) {
		if (ball.yAxis > playerTwoPaddle.position && ball.yAxis < playerTwoPaddle.position + playerTwoPaddle.height) {
			ball.xValueSpeed = -ball.xValueSpeed-2;

		

		} else {
			playerTwoPaddle.point++
			if (playerTwoPaddle.point == 3){
			document.getElementById('pong').innerHTML = "Player One Wins!";
				document.getElementById("pong").style.left = 35 + "%";

			}
			startGame();}}



	document.getElementById("paddle1").style.top = (playerOnePaddle.position) + "px";
	document.getElementById("paddle2").style.top = (playerTwoPaddle.position) + "px";
	document.getElementById("ball").style.top = (ball.yAxis) + "px";
	document.getElementById("ball").style.left = (ball.xAxis) + "px";
	document.getElementById('score2').innerHTML = playerOnePaddle.point;
	document.getElementById('score1').innerHTML = playerTwoPaddle.point;
}, 1000/60);

