function minimumBribes(q) {

    let minBribes = 0;
     
    for (let i = 0; i < q.length; i++) {
      
      if ((q[i] - (i + 1)) > 2) {
        //console.log(i)
        //console.log(`${q[i]} - ${i+1} = ${q[i] - (i + 1)}`);
        
        console.log("Too chaotic")
        return "Too chaotic"
      } else if (q[i] > i + 1) {
        minBribes += q[i] - (i + 1);
      }
      
    }
     
     console.log(minBribes);
     return minBribes
   }
   
   minimumBribes([2, 1, 5, 3, 4]);//3
   minimumBribes([2, 5, 1, 3, 4]);//Too chaotic
   minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);//7