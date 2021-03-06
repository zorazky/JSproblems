/*
    John works at a clothing store. He has a large pile of socks that he must pair by color for sale.
    Given an array of integers representing the color of each sock, determine how many pairs of socks
    with matching colors there are.

    For example, there are  n = 7 socks with colors ar = [1,2,1,2,1,3,2]. There is one pair of color 1 and one of color 2. 
    There are three odd socks left, one of each color. The number of pairs is 2.
*/

function sockMerchant(n, ar) {
    const socks = {}
    let counter = 0
    
    for (let i = 0; i < n; i++) {
      
       if (socks[ar[i]]) {
         //console.log('true')
         socks[ar[i]] += 1
       } else {
         //console.log('false')
         socks[ar[i]] = 1
       }
      
    }
    
    for (let sock in socks) {
      //console.log(socks[sock])
      counter += Math.floor(socks[sock] / 2)
    }
    
    //console.log(counter)
    return counter
  }
  
  sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]); //3