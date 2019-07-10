function countApplesAndOranges(s, t, a, b, apples, oranges) {

    var applesCount = 0;
    var orangesCount = 0;

    for (let i = 0; i < apples.length; i++) {


        if (apples[i] > 0 && apples[i] + a >= s && apples[i] + a <= t) {


            applesCount++;
        }


    }

    for (let j = 0; j < oranges.length; j++) {


        if (oranges[j] < 0 && b + oranges[j] <= t && b + oranges[j] >= s) {


            orangesCount++;
        }


    }

    var resultado = applesCount + "\n" + orangesCount;

    console.log(resultado);
    //return resultado;

}


countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])// 1 1

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2,-4]) // 1 2