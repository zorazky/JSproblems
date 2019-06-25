/*
Lily likes to play games with integers. She has created a new game where she 
determines the difference between a number and its reverse. For instance, given 
the number , its reverse is . Their difference is . The number  reversed is , and 
their difference is .

She decides to apply her game to decision making. She will look at a numbered 
range of days and will only go to a movie on a beautiful day.

Given a range of numbered days,  and a number , determine the number of days 
in the range that are beautiful. Beautiful numbers are defined as numbers 
where  is evenly divisible by . If a day's value is a beautiful number, it 
is a beautiful day. Print the number of beautiful days in the range.
*/

function beautifulDays(i, j, k) {
    
    var counter = 0;


    for (i; i <= j; i++) {
        let reverse = parseInt(i.toString().split("").reverse().join(""), 10);
        if ((i - reverse) % k === 0) {
            counter++;
        }
    }


    console.log(counter)
    return counter;
}