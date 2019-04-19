/*
Given a list of numbers and a number k,
return whether any two numbers from the list add up to k.
For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
*/

const sumK = (values, k) => {

    
    for (let i = 0; i < values.length; i++) {
 
        
        const sumMinusElement = k - values[i];

        for (let j = i + 1; j < values.length; j++) {
            if (sumMinusElement === values[j]) {
                console.log(true)
                return true;
            }
        }
        console.log(false);
        return false;
    }
    
}

sumK([10, 15, 3, 7], 13); //true
sumK([10, 15, 3, 7], 25); //true
sumK([10, 14, 3, 7], 14); //false
sumK([10, 15, 3, 7], 17); //true
sumK([10, 15, 3, 7], 20); //false
sumK([10, 15, 3, 7], 30); //false
sumK([10, 15, 3, 7], 50); //false