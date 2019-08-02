function chocolateFeast(n, c, m) {
  
  let count = 0;
  let temp_count = Math.floor( n / c );
  
 
  
      while( true ) {
          let free_choco = temp_count + (count % m); 
          count += temp_count;
          
          
          if( free_choco < m ) {
              break;
          }

          temp_count = Math.floor(free_choco / m);
      }

  return count;
}

chocolateFeast(10, 2, 5);//6
chocolateFeast(12, 4, 4);//3
chocolateFeast(6, 2, 2);//5
chocolateFeast(7, 3, 2);//3