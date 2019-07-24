function superReducedString(s) {

  let myArr = s.split("");
  let finalWord = ""
  
  const checkPair = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] === arr[i+1]) {
         arr.splice(i,2);  
      
         checkPair(arr)
      }
         
    }  
     return arr.join("")
  }
   
   finalWord = checkPair(myArr);
   
   console.log(finalWord)
   return finalWord ? finalWord : "Empty String"
 }
 
 
 superReducedString("aaabccddd")//abd
 superReducedString("baab")//empty
 superReducedString("aa")//empty