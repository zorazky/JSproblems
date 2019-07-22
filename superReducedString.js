let newWord = "";
  const total = {}
  
  
  
  let newArr = s.split('');
  
  for (let i = 0; i< newArr.length; i++) {
    for (let j = i + 1; j < newArr.length; j++) {
      
      if(newArr[i] === newArr[j]) {
        
        newArr.splice(j, 1);
        newArr.splice(i, 1);
        
      }
    }
  }
  
  
  newWord = newArr.join("")
  
  
  for (let i = 0; i < newWord.length; i++) {
    if(total[newWord[i]]) {
      total[newWord[i]] += 1
    } else {
      total[newWord[i]] = 1
    }
  }
  
  
  for (var property1 in total) {
    console.log(total[property1]);
    if (total[property1] > 1) {
      
      superReducedString(newWord)
    } else {
      
      return newWord.length > 0 ? newWord : "Empty String"
      
    }
  }

  superReducedString("aaabccddd")//abd
superReducedString("baab")//empty