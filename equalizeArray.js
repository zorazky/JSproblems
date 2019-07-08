function equalizeArray(arr) {

    let myCounter = {}
    let bigger = 0;

    for (let i = 0; i < arr.length; i++) {

        if (myCounter[arr[i]]) {
            //console.log('true')
            myCounter[arr[i]] += 1
        } else {
            //console.log('false')
            myCounter[arr[i]] = 1
        }
    }

    for (let p in myCounter) {
        if (myCounter[p] > bigger) {
            bigger = myCounter[p];
        }
    }


    console.log(arr.length - bigger);

    return arr.length - bigger;

}


equalizeArray([3, 3 ,2 ,1, 3])//2