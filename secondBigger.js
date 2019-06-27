/*
 return the second bigger number from an array nums = [2,3,6,6,5] here you should return 5
*/

function getSecondLargest(nums) {
    let biggerNum = Math.max(...nums)
    let lowNumbers = nums.filter(num => num < biggerNum);
    return Math.max(...lowNumbers)
   
}

getSecondLargest([2,3,6,6,5])
