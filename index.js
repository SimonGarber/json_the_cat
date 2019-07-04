const fetchBreedDescription = require('./breedFetcher');
const breedChoice = process.argv[2];
fetchBreedDescription(breedChoice,(elem) =>{
    console.log(elem);
})