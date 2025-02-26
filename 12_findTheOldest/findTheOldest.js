
const getAge = function(birth, death){
    if(!death){
        death = new Date().getFullYear();
    }
    return death - birth;
}


const findTheOldest = function(people) {
    return people.reduce((oldest, youngest) =>{
        const getOldest = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const getyoungest = getAge(youngest.yearOfBirth, youngest.yearOfDeath);
        return getOldest < getyoungest ? youngest : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
