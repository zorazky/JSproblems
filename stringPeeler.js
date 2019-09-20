function stringPeeler(str) {
  
    //mine
    if(str.length < 3) return
    //console.log(str.slice(1,-1))
    return str.slice(1,-1)
    
    //return str.length > 2 ? str.slice(1,-1) : undefined
  }
  
  stringPeeler("test"); //es
  stringPeeler("do"); //
  stringPeeler("try"); //r