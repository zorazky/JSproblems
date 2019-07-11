function repeatedString(s, n) {

  
  
    let counter = 0;
    let total = 0;
    
    
    //find "a" count in current string
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "a") {
        counter ++
      }
    }
     
    if (counter === 0) {
      return 0
    } else {
      
      for (let j = 0; j < n % s.length; j++ ) {
      if (s[j] === "a") {
        total++
      }
        
    }
    //console.log(n % s.length)
    
    //(n % s.length)
    
    //console.log(counter * Math.floor(n / s.length) + total)
    
    return counter * Math.floor(n / s.length) + total
    }
    
    
    
  }
  
  repeatedString("aba", 10)//7
  repeatedString("a", 1000000000000)//1000000000000
  repeatedString("gfcaaaecbg",547602)//164280
  