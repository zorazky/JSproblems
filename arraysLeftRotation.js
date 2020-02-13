function rotLeft(a, d) {
  
    let firstEl;
    
    for (let i = 0; i < d; i++) {
      firstEl = a.shift();
      a.push(firstEl);
    }
    
    console.log(a);
  
  }
  
  rotLeft([1, 2, 3, 4, 5], 4); //5 1 2 3 4