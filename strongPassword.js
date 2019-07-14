function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
 
  let special_characters = "!@#$%^&*()-+"
  
  let counter = 0;
  
  let hasNumber = false;
  let hasCapital = false;
  let hasLower = false;
  let hasSpecial = false;
  
  
  
  for (let i = 0; i < n; i++) {
    if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57 ) {
      hasNumber = true;
    }
    if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90 ) {
      
      hasCapital = true;
    }
    if (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122 ) {
      
      hasLower = true;
    }
    if ((password.charCodeAt(i) >= 33 && password.charCodeAt(i) <= 43) || password.charCodeAt(i) === 45 ) {
      
      hasSpecial = true;
    }
  }
  
  if (!hasNumber) {
    counter++
  } 
  
  if (!hasCapital) {
    counter++
  }
  
  if (!hasLower) {
    counter++
  }
  
  if (!hasSpecial) {
    counter++
  }
  
  if (counter + n >= 6) {
    
    return counter
  } else {
    
    return 6 - n
  }


  
  
}

minimumNumber(11, "#HackerRank") // 1
minimumNumber(3, "Ab1") // 3
minimumNumber(4, "4700") // 3
minimumNumber(7, "AUzs-nV") //1



