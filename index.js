import inquirer from "inquirer";
// 1) computer will generated a random number - Done
// 2) user input for guessing number - Done
// 3) compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "Guess the number between 1-10: ",
    },
]);
if (answer.UserGuessedNumber == randomNumber) {
    console.log("congrats! you guessed right");
}
else {
    console.log("sorry! you guessed wrong");
}
