let randomLoc = Math.floor(Math.random() * 5)
let location1 = randomLoc
let location2 = randomLoc + 1
let location3 = randomLoc + 2

// let location1 = 1;
// let location2 = 2;
// let location3 = 3;

let guess
let hitsed1 = false
let hitsed2 = false
let hitsed3 = false
let hits = 0
let guesses = 0
let isSunk = false

while (isSunk == false) {
	guess = prompt(
		'Приготовся стрелять в 3-х палубный корабль (выбери число от 0 до 6):'
	)
	if (guess < 0 || guess > 6 || guess == null) {
		alert('Я надеюсь ты случайно это сделал, мой дорогой друг.')
	} else {
		guesses = guesses + 1
		if (guess == location1 || guess == location2 || guess == location3) {
			if (guess == location1 && hitsed1 == true) {
				alert('Ты уже сюда стрелял, дурачек.')
			}
			if (guess == location1 && hitsed1 == false) {
				alert('Попал!')
				hits = hits + 1
				hitsed1 = true
			}

			if (guess == location2 && hitsed2 == true) {
				alert('Ты уже сюда стрелял, дурачек.')
			}
			if (guess == location2 && hitsed2 == false) {
				alert('Попал!')
				hits = hits + 1
				hitsed2 = true
			}

			if (guess == location3 && hitsed3 == true) {
				alert('Ты уже сюда стрелял, дурачек.')
			}
			if (guess == location3 && hitsed3 == false) {
				alert('Попал!')
				hits = hits + 1
				hitsed3 = true
			}

			if (hits == 3) {
				isSunk = true
				alert('Ты потопил корабль поздравляю!')
			}
		} else {
			alert('Промах')
		}
	}
}

let stats =
	' Ты использовал ' +
	guesses +
	' попыток что бы утопить карабль , ' +
	' твоя точнось  ' +
	3 / guesses +
	' очень плохо тренируй аим;). Обнови и тренируйся снова.'
alert(stats)
