/*
An integer d is a divisor of an integer n if the remainder of n / d = 0.

Given an integer, for each digit that makes up the integer determine whether 
it is a divisor. Count the number of divisors occurring within the integer.

Note: Each digit is considered to be unique, so each occurrence of the same 
digit should be counted (e.g. for n = 111,1  is a divisor of 111 each time it occurs 
    so the answer is 3).
*/

function findDigits(n) {
    var counter = 0;
    var digits = n.toString().split('').map(Number);


    for (var i = 0; i < digits.length; i++) {
        if (n % digits[i] === 0) {
            counter++;
        }
    }

    console.log(counter)
    return counter
}