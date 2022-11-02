const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  ouput: process.stdout,
});

rl.question("Enter a string:", checkPalindrome);

function checkPalindrome(string) {
  const len = string.length;
  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      console.log("Not a palindrome");
      return;
    }
  }
  console.log("is palindrome");
}
