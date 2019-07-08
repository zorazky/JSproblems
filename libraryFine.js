function libraryFine(d1, m1, y1, d2, m2, y2) {

    if ((d1 > d2 && m1 < m2) || y2 > y1) {
        return 0
    } else if (y1 > y2) {

        return 10000

    } else if (m1 > m2) {

        return (m1 - m2) * 500
    } else if (d1 > d2) {

        return (d1 - d2) * 15
    } else {
        return 0
    }


}

libraryFine(9,6,2015,6,6,2015); //45
libraryFine(2,7,1014,1,1,1015); //0