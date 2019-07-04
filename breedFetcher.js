const request = require('request');

const fetchBreedDescription = function(breedChoice,callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedChoice}`;
  request.get(url,function(err,resp,body) {
    if (err) {
      throw "error getting URL" + err;
    }  else if (!breedChoice) {
      throw "You haven't made a choice, please try again";
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        throw "Breed not found, try again..";
      }
      callback(data[0].description);
    }
  });
};


module.exports = {fetchBreedDescription};

