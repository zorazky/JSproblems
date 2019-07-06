function angryProfessor(k, a) {
    let counter = 0
    
    for (let i = 0; i < a.length; i++) {
      if (a[i] <= 0) {
        counter++
      }
    }
    
    console.log(counter >= k ? "NO" : "YES")
  
  }
  
  angryProfessor(3, [-1, -3, 4, 2]) //YES