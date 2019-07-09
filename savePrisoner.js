function saveThePrisoner(n, m, s) {

    /*
let prisoner = s;

for (let i = 1; i < m; i++) {
  //console.log("Prisoner number is " + prisoner)
  //console.log(i)
  if (prisoner === n) {
    prisoner = 0
  }
  
  prisoner++
}

console.log(prisoner)
return prisoner
*/


 let a = s + m - 1;

  if(a > n){
      if(a % n === 0){
       
       return n;
      }
      
      return a % n;
  }
 
 return(a);
}


saveThePrisoner(7, 19, 2) //6
saveThePrisoner(3, 7, 3) //3
saveThePrisoner(5, 2, 2) //3
saveThePrisoner(144, 797951344, 1) //112