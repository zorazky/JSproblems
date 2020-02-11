

function hourglassSum(arr) {

    let totalGlasses = [];
    let totalGlass = 0;
      
      for (let i = 0; i <= 3; i++) {
        
        for (let j = 0; j <= 3; j++) {
          
          totalGlass += arr[i][j];
          totalGlass += arr[i][j+1];
          totalGlass += arr[i][j+2];
          totalGlass += arr[i+1][j+1];
          totalGlass += arr[i+2][j];
          totalGlass += arr[i+2][j+1];
          totalGlass += arr[i+2][j+2];
          
          totalGlasses.push(totalGlass);
          totalGlass = 0;
          
        }
        
        
      }
      
      console.log(totalGlasses);
      console.log(Math.max(...totalGlasses));
      return Math.max(...totalGlasses);
    
    }
    
    hourglassSum([[1, 1, 1, 0, 0, 0],
                 [0, 1, 0, 0, 0, 0],
                 [1, 1, 1, 0, 0, 0],
                 [0, 0, 2, 4, 4, 0],
                 [0, 0, 0, 2, 0, 0],
                 [0, 0, 1, 2, 4, 0]]);