function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
  let counter = 0
  
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      if (keyboards[i] + drives[j] > counter && keyboards[i] + drives[j] <= b) {
        counter = keyboards[i] + drives[j]
      }
    }
  }
  
  console.log(counter)
  return counter === 0 ? -1:counter;

}
getMoneySpent([3,1],[5, 2, 8],10) //9
getMoneySpent([4],[5],5) // -1
