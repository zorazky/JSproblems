function climbingLeaderboard(scores, alice) {

    let place = 1
    let places = []
    
    const scoresUnique = scores.filter(function(item, index){
      return scores.indexOf(item) >= index;
    });
    
    //console.log(scoresUnique)
    
    
    alice.map(score => {
      for (let i = 0; i < scoresUnique.length; i++) {
        //console.log(`score is :${score} and place:${place} from ${scoresUnique[i]}`)
        if (score < scoresUnique[i]) {
          place++
        }
        //console.log(place)
      }
      
      places.push(place)
      console.log(place)
      place = 1
    })
    
     return places
     
     
  }
  
  climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102]); //6, 5, 4, 2, 1