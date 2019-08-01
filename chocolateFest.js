function chocolateFeast(n, c, m) {

  let dollars = n
  let chocolateCost = c
  let chocolateWrap = m
  let initialWraps = Math.floor((dollars / chocolateCost) / chocolateWrap)
  let chocolateCounter = n / c
  let wrapperLeft = chocolateCounter > chocolateWrap ? chocolateCounter % chocolateWrap : 0
  
  
  const chocolateChange = (cC, iW ) => {
    
    if (initialWraps + wrapperLeft )
    return Math.floor(cC + iW)
  }
  
  console.log(wrapperLeft)
  //console.log(chocolateChange(chocolateCounter,initialWraps))
  //return chocolateChange(chocolateCounter,initialWraps)
}

chocolateFeast(10, 2, 5);//6
chocolateFeast(12, 4, 4);//3
chocolateFeast(6, 2, 2);//5
chocolateFeast(7, 3, 2);//3