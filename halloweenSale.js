// Complete the howManyGames function below.
function howManyGames(p, d, m, s) {
    // Return the number of games you can buy
    let price = p
    let counter = 0
    
    while (s >= m) {
      s -= price
      counter++
      if (price - d >= m) {
        price -= d
        console.log(price)
      } else {
        price = m
      }
    }
    
    console.log(counter)
    return counter
}

//howManyGames(20, 3, 6, 80); //6
//howManyGames(20, 3, 6, 85); //7
howManyGames(16, 2, 1, 9981); //9917