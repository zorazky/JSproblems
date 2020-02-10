function countingValleys(n, s) {

    let myArr = s.split("");
    let currentLevel = 0;
    let valleys = 0;
    
    myArr.forEach(step => {
      if (step === "U") {
        currentLevel++;
        if (currentLevel === 0) {
          valleys++;
        }
      } else {
        currentLevel--;
      }
      
      
    });
    
    console.log(valleys);
    return valleys;
  
  }
  
  countingValleys(8,'UDDDUDUU'); //1