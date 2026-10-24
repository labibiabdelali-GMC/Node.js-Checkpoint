// Task 4: generate a random password
const generator = require("generate-password");

function generatePassword() {
  const password = generator.generate({
    length: 12,
    numbers: true,
    symbols: true,
  });
  console.log(password);
}

generatePassword();
