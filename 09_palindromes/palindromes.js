const palindromes = function (string) {
    const cleaneString = string.toLowerCase().replace(/[^a-z0-9]/gi, '');
    return cleaneString.split('').reverse().join('') === cleaneString;
   
};

// Do not edit below this line
module.exports = palindromes;
