const {fetchBreedDescription} = require('./breedFetcher');
const breedChoice = process.argv[2];

fetchBreedDescription(breedChoice,(error,desc) =>{
  if(error) {
    console.log(elem,error)
  } else {
    console.log(desc);
    
  }
});
