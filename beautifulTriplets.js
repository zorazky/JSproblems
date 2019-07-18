function beautifulTriplets(d, arr) {
    let total = 0;
    
    for (let i = 0; i < arr.length - 1; i++ ) {
      for (let j = i+1; j < arr.length; j++) {
        if(arr[i] + d === arr[j]) {
          for (let k = j; k < arr.length; k++ ) {
            if(arr[j] + d === arr[k]) {
              total++
            }
          }
        }
      }
    }
  
    
    console.log(total)
    return total
  }
  
  beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10]); //3
  beautifulTriplets(3, [1, 6, 7, 7, 8, 10, 12, 13, 14, 19]); //2