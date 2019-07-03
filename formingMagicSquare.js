


function formingMagicSquare(s) {

    let myArray = []

    for (let z = 0; z < 3; z++) {
        for (let y = 0; y < 3; y++) {
            myArray.push(arguments[0][z][y])
        }
    }
   
    const squares = [
        [8, 1, 6, 3, 5, 7, 4, 9, 2],
        [4, 3, 8, 9, 5, 1, 2, 7, 6],
        [2, 9, 4, 7, 5, 3, 6, 1, 8],
        [6, 7, 2, 1, 5, 9, 8, 3, 4],
        [6, 1, 8, 7, 5, 3, 2, 9, 4],
        [8, 3, 4, 1, 5, 9, 6, 7, 2],
        [4, 9, 2, 3, 5, 7, 8, 1, 6],
        [2, 7, 6, 9, 5, 1, 4, 3, 8]
    ];

    let cost;

    for (let i = 0; i < squares.length; i++) {
        let currCost = 0;
        for (let j = 0; j < 9; j++) {
            currCost += Math.abs(squares[i][j] - myArray[j]);
        }
        if (cost === undefined) {
            cost = currCost;
        } else if (currCost < cost) {

            cost = currCost;

        }
    }
    console.log(cost);
    return cost
}