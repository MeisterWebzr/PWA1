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


		};


	};


	function winnerCheck(){
		//code here


	};

	//Program starts here
	console.log("Program start here")
	fight(); //this is where the program starts

})();

