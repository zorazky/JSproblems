function climbingLeaderboard(scores, alice) {

    let place = 1
    
    alice.map(score => {
      for (let i = 0; i < scores.length; i++) {
        if (score < scores[i]) {
          place++
        } else {
          console.log(place)
        }
      }
    })
     
  }
  
  climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102]); //6, 5, 4, 2, 1