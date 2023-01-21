const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const path = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.error('There was an error:', error);
    return;
  }

  fs.writeFile(path, body, (err) => {
    if (err) {
      console.error('There was an error:', err);
      return;
    }

    console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
  });
});
