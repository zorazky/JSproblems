function getTotalX(a, b) {
   
    let factors = {};
    let filteredFactors = [];
    let combinedArr = [...a, ...b]
    let newArr = [];
    
    
    //const factors = number => [...Array(number + 1).keys()].filter(i=>number % i === 0);
    // get all factors from array b
    for (let i = 0; i < b.length; i++) {
      for(let j = 0; j <= b[i]; j++) {
        if (b[i] % j === 0 ) {
          
          if(factors[j]) {
            factors[j] += 1
          } else {
            factors[j] = 1
          }
          
        }
      }
    }
    
    //console.log(factors)
    //filter all factors that work on all values
    for (var property in factors) {
      
      //console.log(property + " " + factors[property]);
      if(factors[property] === b.length) {
        filteredFactors.push(Number(property))
      }
    }
  
    //console.log(filteredFactors);
    //filter values from array a
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < filteredFactors.length; j++) {
        
         //console.log(filteredFactors.length)
         //console.log(filteredFactors[j] + " % " + a[i] + " = " + filteredFactors[j] % a[i])
         
         filteredFactors = filteredFactors.filter(ele => ele % a[i] === 0);
        
      }
    }
    
    
    
   
    console.log(filteredFactors)
    return filteredFactors
  }
  
  getTotalX([2,6],[24,36])//2 -- 6 , 12
  getTotalX([2,4], [16, 32, 96])// 3 --- 4, 8 and 16
  getTotalX([3,4], [24,48]) // 2
  getTotalX([3,9,6], [36,72]) // 2
  
  /*
  [1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 96]
  [1, 2, 4, 8, 16, 32]
  [1, 2, 4, 8, 16]
  */
      
      