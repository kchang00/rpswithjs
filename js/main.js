// js function
/* can block comment */

(() => {
	// like print in python (both method calls)
	console.log('loaded!');
	// can see message in developer tool

/* can also long hand like this
function()
() => console.log
*/
	// same as array in python

	var choices = ['Rock', 'Paper', 'Scissors'];
	var computer;
	var player = document.querySelector('#weapon');
	var trigger = document.querySelector('#play');
	var status = document.querySelector('.winlose');

	function play_game() {
		console.log('called game function');

		//generate random number used to pick weapon
		computer = choices[Math.floor(Math.random() * choices.length)];
		console.log(computer);

		var player_choice = player.value;
		console.log(player_choice);

		if (computer.toLowerCase() == player_choice.toLowerCase()) {
			//tie
			console.log('tie');
			status.textContent = 'Tie! You live to shoot another day!';
		}

		else if (player_choice.toLowerCase() == 'rock'){
			 if (computer.toLowerCase() == 'scissors') {
				console.log('win');
				// backtics = under esc key, used to access variables with ${}
				status.textContent = `You won! ${player_choice} beats ${computer}!`;
			}else {
				console.log('lose');
				status.textContent = `You lost! ${computer} beats ${player_choice}!`;
			}
		}

		else if (player_choice.toLowerCase() == 'scissors'){
			 if (computer.toLowerCase() == 'paper')        {
				console.log('win');
				status.textContent = `You won! ${player_choice} beats ${computer}!`;
			}else {
				console.log('lose');
				status.textContent = `You lost! ${computer} beats ${player_choice}!`;
			}
		}

		else if (player_choice.toLowerCase() == 'paper'){
			 if (computer.toLowerCase() == 'rock')        {
				console.log('win');
				status.textContent = `You won! ${player_choice} beats ${computer}!`;
			}else {
				console.log('lose');
				status.textContent = `You lost! ${computer} beats ${player_choice}!`;
			}
		}

		else {
			alert('Input a valid selection');
		}
	}

	// js event based
	trigger.addEventListener('click', play_game);

})();