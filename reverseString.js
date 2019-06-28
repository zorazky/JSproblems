/*
    Complete the reverseString function; it has one parameter, s.
    You must perform the following actions:

Try to reverse string  susing the split, reverse, and join methods.
If an exception is thrown, catch it and print the contents of the exception's message 
on a new line.
Print s on a new line. If no exception was thrown, then this should be the 
reversed string; if an exception was thrown, this should be the original string.
*/


function reverseString(s) {

    try {
        let result = Number(s.split('').reverse().join(''))
        
        if (isNaN(result)) {
          result = s.split('').reverse().join('')
        }
        console.log(result)
    }
    catch (err) {
        console.log(err.message)
        console.log(s)
    }
    
}

reverseString("1234")
reverseString("abcd")