const findTheOldest = function(array) {
    let ageList = []
    array.forEach((person) => {
        if (person.yearOfDeath == null) {
            let personAge = 2023 - person.yearOfBirth;
            ageList.push(personAge);
        } else {
            let personAge = person.yearOfDeath - person.yearOfBirth
            ageList.push(personAge)
        }
    })
    
    let oldestInd = ageList.indexOf(Math.max(...ageList));
    console.log((array[oldestInd].name))
    return array[oldestInd]
};

// Do not edit below this line
module.exports = findTheOldest;
