const request = require('request');
const args = process.argv;

const input = args[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${input}`, function(error, response, body) {
  if (error) {
    console.log("Error");
  } else {
    const data = JSON.parse(body);
    if (data.length > 0) {
      console.log(data);
      console.log(data[0].description);
    } else {
      console.log('Not found!');
    }
   

  }
  
});