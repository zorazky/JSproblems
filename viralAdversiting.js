function viralAdvertising(n) {

    //console.log((Math.floor(5/2)*3))
    
    let counter = 1
    let liked = 0
    let tempShared = 5
    
    while (counter <= n) {
      
      
      liked += Math.floor(tempShared/2)
      //console.log(liked)
      tempShared = Math.floor(tempShared/2)*3
      
      counter++
    }
    
    console.log(liked);
    return liked
    
    
  }
  
  viralAdvertising(3)//9
  viralAdvertising(4)//15
  viralAdvertising(5)//24
  
  
  /*
  Day Shared Liked Cumulative
  1      5     2       2
  2      6     3       5
  3      9     4       9
  4     12     6      15
  5     18     9      24
  */