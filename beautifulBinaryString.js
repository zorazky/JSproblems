function beautifulBinaryString(b) {
  
    if (b.indexOf('010') === -1) {
      console.log(0)
      return 0
    }
    
    let count = 0;
    let position = b.indexOf('010');
    
    while (position !== -1) {
      count++
      b = b.replace("010", "011")
      position = b.indexOf('010', position + 2);
    }
    
    console.log(count)
  
  }
  
  beautifulBinaryString("0101010");//2
  beautifulBinaryString("01100");//0
  beautifulBinaryString("0100101010");//3
  beautifulBinaryString("0100101010100010110100100110110100011100111110101001011001110111110000101011011111011001111100011101");//10
  