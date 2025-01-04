const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    return people.reduce((oldest, current) => {
        // Assume current year if `yearOfDeath` is undefined
        const oldestDeathYear = oldest.yearOfDeath || currentYear;
        const currentDeathYear = current.yearOfDeath || currentYear;

        const oldestAge = oldestDeathYear - oldest.yearOfBirth;
        const currentAge = currentDeathYear - current.yearOfBirth;

        return (currentAge > oldestAge) ? current : oldest;
    });
};



// Do not edit below this line
module.exports = findTheOldest;
