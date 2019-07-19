function getTotalX(a, b) {
   
    let factors = {};
    let filteredFactors = [];
    let combinedArr = [...a, ...b]
    let newArr = [];
    
    
    //const factors = number => [...Array(number + 1).keys()].filter(i=>number % i === 0);
    
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
    
    for (var property in factors) {
      
      //console.log(property + " " + factors[property]);
      if(factors[property] === b.length) {
        filteredFactors.push(Number(property))
      }
    }
  
    //console.log(filteredFactors);
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < filteredFactors.length; j++) {
        if (filteredFactors[j] % a[i] !== 0 ) {
          filteredFactors.splice(j, 1)
        }
      }
    }
    
    
    
    
    console.log(filteredFactors)
    return filteredFactors
  }
  
  getTotalX([2,4], [16, 32, 96])// 3 --- 4, 8 and 16
  getTotalX([3,4], [24,48]) // 2
  getTotalX([3,9,6], [36,72]) // 2
  
  /*
  [1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 96]
  [1, 2, 4, 8, 16, 32]
  [1, 2, 4, 8, 16]
  */
      
      