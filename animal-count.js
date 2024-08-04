function animalCount(miles){
    const animalDensityFirst10Miles = 10;
    const animalDensitySecond10Miles = 50;
    const animalDensityBeyond20Miles = 100;

    if(miles <= 10){
        const count = miles * animalDensityFirst10Miles;
        return count;
    }
    else if( miles <= 20){
        const firstDenseAnimals = 10 * animalDensityFirst10Miles; 
        const restMiles = miles -10;
        const secondDenseAnimals = restMiles * animalDensitySecond10Miles
        const totalAnimals = firstDenseAnimals + secondDenseAnimals;
        return totalAnimals;
    }
    else{
        const firstDenseAnimals = 10 * animalDensityFirst10Miles; 
        const secondDenseAnimals = 10 * animalDensitySecond10Miles;
        const beyond20Miles = miles - 20;
        const beyondDenseAnimals = beyond20Miles * animalDensityBeyond20Miles;
        const total = firstDenseAnimals + secondDenseAnimals+ beyondDenseAnimals;
        return total;


    }
}

const animals = animalCount(25);
console.log(animals);