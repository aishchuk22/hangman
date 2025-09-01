const words = [
  "galadriel",
  "champion",
  "robotika",
  "greezly",
  "laptopchik",
  "laprichon",
  "horsepower",
  "computer",
];

const word = words[Math.floor(Math.random() * words.length)];

const answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

let remainingLetters = word.length;
let lives = 7;

while (remainingLetters !== 0 && lives !== 0) {
  alert(answerArray.join(" ") + `     You have ${lives} attempts left`);

  const guess = prompt("Guess a letter or click Cancel to quit");

  if (guess === null) {
    alert("You are too weak to play this game");
    break;
  } else if (guess.length !== 1) {
    alert("Please enter one letter");
  } else {
    let correctGuess = false;

    for (let i = 0; i < word.length; i++) {
      if (word[i] === guess) {
        answerArray[i] = guess;
        remainingLetters--;
        correctGuess = true;
      }
    }

    if (!correctGuess) {
      lives--;
    }
  }
}

if (remainingLetters === 0) {
  alert(`Congrats! the word is ${word}`);
} else if (lives === 0) {
  alert("Game over, loser!");
}
