function marsExploration(s) {
  
    let counter = 0;
    let repeated = Math.floor(s.length / 3)
    
     for (let j = 0; j < repeated; j++) {
       
       //for (let i = j * 3; i < (j * 3) + 3; i++) {
        for (let i = 0; i < 3; i++) {
         console.log(j * 3 + i)
         
         if ((i === 0 || i === 2) && s[j * 3 + i] !== "S") {
          
          counter++
        } 
        
        if (i === 1 && s[j * 3 + i] !== "O") {
          
          counter++
        } 
       }
         
       
     }
    
    console.log("counter is " + counter)
    return counter
  }
  
  marsExploration("SOSSPSSQSSOR"); // 3 SOS-SPS-SQS-SOR