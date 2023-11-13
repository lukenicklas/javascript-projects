//1) Create a function with an array of numbers as its parameter. The function should iterate through the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];


function findMinimum(numsArray) {
   let minimumValue = numsArray[0]
    for (let i = 0; i < numsArray.length; i++) {
        if (numsArray[i] < minimumValue) {
          minimumValue = numsArray[i]
        }

// compare numsArray to minimumVAlue. If numsArray is smaller than the minimumValue, then we need to assign that value as the new minimumValue, then keep iterating through.
    }
    return minimumValue
}


//Using one of the test arrays as the argument, call your function inside the console.log statement below.

console.log(findMinimum(nums2));

