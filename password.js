const generatePassword = require('generate-password');

function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 40,  // Set the length of the password
    numbers: true,  // Include numbers in the password
    symbols: true,  // Include symbols in the password
    uppercase: true,  // Include uppercase letters in the password
    excludeSimilarCharacters: true,  // Exclude similar characters like '1' and 'l'
  });

  return password;
}

// Generate and log a random password
const randomPassword = generateRandomPassword();
console.log('Generated Password:', randomPassword);
