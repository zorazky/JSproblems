/*
We define the distance between two array values as the number of indices between the two values. Given a, 
find the minimum distance between any pair of equal elements in the array. If no such value exists, print -1.

For example, if a = [3,2,1,2,3], there are two matching pairs of values: 3 and 2. The indices of the 3's are  i = 0 and j = 4, so their distance is d[i,j] = [j-i] = 4. 
The indices of the 2's are  i=1 and j=3, so their distance is d[i,j] = [j,i] = 2.
*/

function minimumDistances(a) {
  
  var coord = [];
  var findits = [];
  
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a.length; j++) {
      if ( i !== j && a[i] === a[j]) {
        
        //console.log(i , j )
        if (j - i > 0) {
          coord.push(j - i);
        }
        
        //coord.push(j);
      }
    }
  }
  
  if (coord.length === 0) {
    return -1
  }
  
  console.log(Math.min(...coord))
  return Math.min(...coord);

}

minimumDistances([7, 1, 3, 4, 1, 7]);