
function encryption(s) {

 
  let rows = Math.floor(Math.pow(s.length, 0.5))
  let columns = Math.ceil(Math.pow(s.length, 0.5))
  
  if (rows * columns < s.length) {
    rows = Math.round(Math.pow(s.length, 0.5))
    columns = Math.round(Math.pow(s.length, 0.5))
  }
   
  let resultado = "";
  
  for (let j = 0; j < columns; j++) {
    //console.log("este es " + j)
    for (let i = 0; i < rows; i++) {
      
      if (j + (columns * i) < s.length) {
        resultado += s[j + (columns * i)]
      }
      
     
    }
    
    if (j !== columns - 1) {
      resultado += " ";
    }
    
  }
  
  console.log(resultado)
  return resultado
}

encryption("haveaniceday")//hae and via ecy
encryption("feedthedog")// fto ehg ee dd
encryption("chillout")// clu hlt io
