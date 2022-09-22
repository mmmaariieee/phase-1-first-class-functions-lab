// Code your solution in this file!
const returnFirstTwoDrivers = function(object) {
    let newArray = [object[0], object[1]];
    return newArray;
}

const returnLastTwoDrivers = function(object) {
    let newArray = [object[object.length-2], object[object.length-1]];
    return newArray;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(y) {
    return function(x) {
        return x * y;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(object, action) {
    return action(object);
}