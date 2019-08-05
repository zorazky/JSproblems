function jumpingOnClouds(c) {
  
    let i = 0
    let counter = 0
  
    while (true) {
      console.log(i)
      console.log("counter is " + counter)
      
      
      if (c[i + 2] !== 1 && c[i + 2] < c.length ) {
        i += 2
        counter++
      } else if (c[i + 1] !== 1 && c[i + 2] < c.length ) {
        i += 1
        counter++
      }
      if (i === c.length + 1) {
        break;
      }
    }
    
    //console.log(counter)
    
    
  }
  
  jumpingOnClouds([0,0,1,0,0,1,0]);//4
  jumpingOnClouds([0,0,0,0,1,0]);//3