const findTheOldest = function(people) {
    const oldest = people.sort((a,b) => {
        let aAge = (!a.yearOfDeath) 
                     ? new Date().getFullYear() - a.yearOfBirth
                     : a.yearOfDeath - a.yearOfBirth;
        let bAge = (!b.yearOfDeath) 
                     ? new Date().getFullYear() - b.yearOfBirth
                     : b.yearOfDeath - b.yearOfBirth;
        return (aAge > bAge) ? -1 : 1;
    })
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
