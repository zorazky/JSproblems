/*
The Utopian Tree goes through 2 cycles of growth every year. 
Each spring, it doubles in height. Each summer, its height increases by 1 meter.

Laura plants a Utopian Tree sapling with a height of 1 meter at the onset of spring.
How tall will her tree be after  growth cycles?
*/


function utopianTree(n) {

    var counter = 0;

    for (var j = 0; j <= n; j++) {
        if (j === 0 || j % 2 === 0) {
            counter++;
        } else {
            counter = counter * 2;
        }
    }
    return counter 
}
