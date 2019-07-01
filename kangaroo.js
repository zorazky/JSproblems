function kangaroo(x1, v1, x2, v2) {

    let cang1Start = x1;
    let cang2Start = x2;

    if (x2 > x1 && v2 >= v1) {
        console.log("NO")
        return "NO"
    } else {
        while (cang1Start < cang2Start) {

            cang1Start += v1;
            cang2Start += v2;

            if (cang1Start === cang2Start) {
                return "YES"
            }
        }
    }

    return "NO"

}