function designerPdfViewer(h, word) {
  
    const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let heightList = [];
    let wide = word.length;
    
    const heightOfLetter = (letter) => {
      return h[letters.indexOf(letter)]
    }
    
    for (let i = 0; i < word.length; i++) {
      //console.log(word[i])
      heightList.push(heightOfLetter(word[i]))
    }
    
    let area = Math.max(...heightList) * wide
    return area
    
    
  }
  
  designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], "zaba")
  //28