/*
    You are given an array of n integers ar = [ar[0],ar[1],...ar[n-1] , and a positive integer, k. Find and print 
    the number of (i,j) pairs where i < j and ar[i] + ar[j] is divisible by k.

    For example, ar = [1,2,3,4,5,6] and k = 5. Our three pairs meeting the criteria are [1,4],[2,3]and [4,6] .
*/

function divisibleSumPairs(n, k, ar) {

    let counter = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            //console.log(ar[i] + ar[j])
            if ((ar[i] + ar[j]) % k === 0) {
                counter++
            }
        }
    }
    console.log(counter)
    return counter

}

divisibleSumPairs(6,3,[1, 3, 2, 6, 1, 2]); //5