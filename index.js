// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(arr, str) {
    const matchingDriver = arr.filter(driver => driver === str || driver === str.toLowerCase());
    
    return matchingDriver;
}

function fuzzyMatch(arr, str) {
    const matchingDriver = arr.filter(driver => driver.slice(0, 2) === str || driver.name === str);

    return matchingDriver;
}

function matchName(arr, str) {
    const matchingDriver = arr.filter(driver => driver.name === str);
    
    return matchingDriver;
}