const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(process.argv);

rl.question("Enter a string:", checkPalindrome);

function checkPalindrome(string) {
  if (string.split("").reverse().join() !== string)
    console.log("Not a palindrome");
  else console.log("is palindrome");
}
