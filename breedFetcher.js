const request = require('request');
const breedChoice = process.argv[2];
const url = `htt_ps://api.thecatapi.com/v1/breeds/search?q=${breedChoice}`;

const get = function(url,callback) {
  request.get(url,function(err,resp,body) {
        
        
        
    if (err) {
      throw "error getting URL" + err;

    } else {
      const data = JSON.parse(body);
        
      if (data.length === 0) {
            
        throw "Breed not found, try again..";
      }
      callback(data);

    }
  });
};

get(url,(elem)=>{
  console.log(elem);
});
//anonymous function


