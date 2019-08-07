// Complete the howManyGames function below.
function howManyGames(p, d, m, s) {
    // Return the number of games you can buy
    let price = p
    let counter = 0
    
    if(p > s) {
      return 0
    }
    
    while (s >= price) {
      s -= price
      //console.log(s)
      counter++
      if (price - d >= m) {
        price -= d
        //console.log(price)
      } else {
        price = m
      }
    }
    
    console.log(counter)
    return counter
}

howManyGames(20, 3, 6, 80); //6
howManyGames(20, 3, 6, 85); //7
howManyGames(16, 2, 1, 9981); //9917
howManyGames(100, 1, 1, 99); //0
howManyGames(100, 19, 1, 180); // 1