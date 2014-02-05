/*
	Author:Otto "Meister" Burroughs
	Date: 02/05/14
	Assignment: Goal1 - Duel1
*/


//Self executing function
(function(){

	console.log("FIGHT!!!");

	//players name
	var playerOneName = "Meister"; 
	var playerTwoName = "Webzr";


	//players damage
	var player1Damage = 20;
	var player2Damage = 20;

	//player health
	var playerOneHealth = 100;
	var playerTwoHealth = 100;

	//rounds
	var round = 1;

	function fight(){
	
		console.log("in the fight function")
		
		alert(playerOneName + ":"+ " " + playerOneHealth + "%" + " " + " *START* " + " " + playerTwoName + ":" + " " + playerTwoHealth + "%" + " " + " *START* " );


		//fight code begins here
		for (var i = 0; i < 10; i++) {
			console.log(i);
		
		//random number formula is Math.floor(Math.random() * (max-min) + min)
		var minDamage1 = player1Damage * .5;
		var minDamage2 = player2Damage * .5;
		var f1 = Math.floor(Math.random() * (player1Damage-minDamage1) + minDamage1);
		var f2 = Math.floor(Math.random() * (player2Damage-minDamage2) + minDamage2);

		//console.log(f1);
		//console.log(f2);

		//inflicting damage
		playerOneHealth -= f1;
		playerTwoHealth -= f2;


		console.log(playerOneName + ":"+ " " + playerOneHealth + "%" + " " + " " + playerTwoName + ":" + " " + playerTwoHealth + "%");

		var results = winnerCheck();
		console.log(results);

		};


	};


	function winnerCheck(){
		
		console.log("In winner Check area of code")

		//code here
		var result = "No winner"; //determeining the var for no winner/ tie statement

			if (playerOneHealth < 1 && playerTwoHealth < 1) { //checking for players health less than 1

				result = "You Both Die"; //alert for tie

			}else if (playerOneHealth < 1){ //checking if player1 health is less than 1 

				result = playerTwoName + " WINS!!! ";
			
			}else if (playerTwoHealth < 1){

				result = playerOneName + " WINS!!! ";
		};

		return result;

	};

	//Program starts here
	console.log("Program start here");
	fight(); //this is where the program starts

})();

