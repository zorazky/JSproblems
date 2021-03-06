/*
    You have been asked to help study the population of birds migrating across the
    continent. Each type of bird you are interested in will be identified by an
    integer value. Each time a particular kind of bird is spotted, its id number
    will be added to your array of sightings. You would like to be able to find
    out which type of bird is most common given a list of sightings. Your task is 
    to print the type number of that bird and if two or more types of birds are 
    equally common, choose the type with the smallest ID number.

For example, assume your bird sightings are of types arr = [1,1,2,2,3]. There are two each of 
types 1 and 2, and one sighting of type 3. Pick the lower of the two types seen 
twice: type 1.


*/

function migratoryBirds(arr) {
    let birds = {}
    let bigger = 0;
    let bigBirds = []
    
    for (let i = 0; i < arr.length; i++) {
      if (birds[arr[i]]) {
           birds[arr[i]] += 1
            
           // get biggest number
           if (birds[arr[i]] > bigger) {
            bigger = birds[arr[i]]
            }
                 
           
      } else {
           birds[arr[i]] = 1
      }
      
    }
    
    for (let bird in birds) {
      if (birds[bird] === bigger) {
        bigBirds.push(Number(bird))
      }  
    }
    
    
    console.log(Math.min(...bigBirds))
    return Math.min(...bigBirds)
  
  }
  
  migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]); //3