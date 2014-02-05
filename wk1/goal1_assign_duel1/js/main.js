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
		
		//fight code begins here
		for (var i = 0; i < 10; i++) {
			console.log(i);
		};

	};


	function winnerCheck(){
		//code here


	};

	//Program starts here
	console.log("Program start here")
	fight(); //this is where the program starts

})();

