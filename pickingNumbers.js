function pickingNumbers(a) {
    // Write your code here
  
  let counter = 0
  let tempCounter = 1
  
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j< a.length; j++ ) {
      if((a[i] === a[j] || a[i] + 1 === a[j] ) && i !== j) {
        tempCounter++
      }
    }
    
    if (tempCounter > counter) {
      counter = tempCounter
    }
    
    tempCounter = 1
  }

  console.log(counter)
}

pickingNumbers([4, 6, 5, 3, 3, 1]); //3
pickingNumbers([1, 2, 2, 3, 1, 2]); //5