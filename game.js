
// window width 475
// window heigh 1277



var nwWall = {

position: 160,
width: 20,
height:100,

}

var playerOnePaddle = { 

height: 160,
width: 20,
speed: 0,
position: 460,
point: 0,
}

var swWall = {

position: 584,
width: 20,
height:100,

}





var neWall = {

position: 160,
width: 20,
height:100,

}


var playerTwoPaddle = {

height: 160,
width: 20,
speed: 0,
position: 460,
point: 0,

}

var seWall = {

position: 584,
width: 20,
height:100,

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


//makes paddles move while key is held down
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


//makes paddles stop when key is up
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


//the below set of statements keeps the paddles on the board

	if (playerOnePaddle.position <= nwWall.position + nwWall.height) {
		playerOnePaddle.position = nwWall.position + nwWall.height;
	}
	if (playerTwoPaddle.position <= neWall.position + neWall.height) {
		playerTwoPaddle.position = neWall.position + neWall.height;
	}
	if (playerOnePaddle.position + playerOnePaddle.height > swWall.position) {
		playerOnePaddle.position = swWall.position - playerOnePaddle.height;
	}
	if (playerTwoPaddle.position + playerTwoPaddle.height > swWall.position) {
		playerTwoPaddle.position = seWall.position - playerTwoPaddle.height;
	}










//makes ball bounce off the top and bottom of window
	if (ball.yAxis <= 160 || ball.yAxis >= window.innerHeight - ball.radius) {
		ball.yValueSpeed = -ball.yValueSpeed
	}


	
//makes the ball bounce off of playerOnePaddle
	if (ball.xAxis <= playerOnePaddle.width) {


		if (ball.yAxis >= playerOnePaddle.position && ball.yAxis <= playerOnePaddle.position  + playerOnePaddle.height){
			
			ball.xValueSpeed = -ball.xValueSpeed+2; //increases speed

			
				document.getElementById("swWall").style.background = getRandomColor();
				document.getElementById("seWall").style.background = getRandomColor();
				document.getElementById("nwWall").style.background = getRandomColor();
				document.getElementById("neWall").style.background = getRandomColor();





//makes ball bounce of nwWall

		} else if (ball.yAxis >= nwWall.position && ball.yAxis <= nwWall.position  + nwWall.height){

			ball.xAxis+= 10;

		ball.xValueSpeed = -ball.xValueSpeed+2; //increases speed


				document.getElementById("swWall").style.background = getRandomColor();
				document.getElementById("seWall").style.background = getRandomColor();
				document.getElementById("nwWall").style.background = getRandomColor();
				document.getElementById("neWall").style.background = getRandomColor();


//makes ball bounce off swWall
		
		} else if (ball.yAxis <= swWall.position + swWall.height && ball.yAxis >= swWall.position){

			ball.xAxis+= 10;

		ball.xValueSpeed = -ball.xValueSpeed+2; //increases speed
	
				document.getElementById("swWall").style.background = getRandomColor();
				document.getElementById("seWall").style.background = getRandomColor();
				document.getElementById("nwWall").style.background = getRandomColor();
				document.getElementById("neWall").style.background = getRandomColor();



		}else {//means that they socred 
			playerOnePaddle.point++;
			if (playerOnePaddle.point == 3){
			document.getElementById('pong').innerHTML = "Player Two Wins!";
				
				document.getElementById("pong").style.left = 25 + "%";
}
			startGame();}}







	if (ball.xAxis >= window.innerWidth - ball.radius - playerTwoPaddle.width) {

		if (ball.yAxis >= playerTwoPaddle.position && ball.yAxis <= playerTwoPaddle.position + playerTwoPaddle.height) {
			ball.xValueSpeed = -ball.xValueSpeed-2;

			//document.getElementById("paddle2").style.background = getRandomColor();

				document.getElementById("swWall").style.background = getRandomColor();
				document.getElementById("seWall").style.background = getRandomColor();
				document.getElementById("nwWall").style.background = getRandomColor();
				document.getElementById("neWall").style.background = getRandomColor();




		} else if (ball.yAxis >= neWall.position && ball.yAxis <= neWall.position  + neWall.height){

			ball.xAxis-= 10;

		ball.xValueSpeed = -ball.xValueSpeed-2; //increases speed
		
				document.getElementById("swWall").style.background = getRandomColor();
				document.getElementById("seWall").style.background = getRandomColor();
				document.getElementById("nwWall").style.background = getRandomColor();
				document.getElementById("neWall").style.background = getRandomColor();

		
		} else if (ball.yAxis <= seWall.position + seWall.height && ball.yAxis >= seWall.position){

		


			ball.xAxis-= 10;

		ball.xValueSpeed = -ball.xValueSpeed-2; //increases speed
		
				document.getElementById("swWall").style.background = getRandomColor();
				document.getElementById("seWall").style.background = getRandomColor();
				document.getElementById("nwWall").style.background = getRandomColor();
				document.getElementById("neWall").style.background = getRandomColor();








		

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

