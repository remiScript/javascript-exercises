//removeFromArray([1, 2, 3, 4], 1, 2, 3, 4)).toEqual([]);


const removeFromArray = function(myArray, ...valuesToCheck) {

    //for every value we want to check, we have the value to be removed
    valuesToCheck.forEach(valToRemove => {
        // which is checked against each value of myArray
        myArray.forEach(arrayValue => {
            // if they match:
            if (valToRemove === arrayValue) {
                // we splice myArray at the index of the matching value
                myArray.splice(myArray.indexOf(arrayValue), 1);
            };
        });
    });
    return myArray;

        

};

console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4));

// Do not edit below this line
module.exports = removeFromArray;
