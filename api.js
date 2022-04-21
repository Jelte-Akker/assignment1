let axios = require("axios");

axios.get('https://inwerk-files.s3-eu-west-1.amazonaws.com/opdracht3.json')
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  })