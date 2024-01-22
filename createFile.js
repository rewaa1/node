const fs = require('fs');

const content = 'Hello Node';

fs.writeFile('welcome.txt', content, (err) => {
  if (err) {
    console.error('Error creating the file:', err);
  } else {
    console.log('File "welcome.txt" has been created with ontent:', content);
  }
});
