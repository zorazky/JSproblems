/*
    Brie’s Drawing teacher asks her class to open their books to a page number.
    Brie can either start turning pages from the front of the book or from the
    back of the book. She always turns pages one at a time. When she opens the book,
    page 1 is always on the right side.

    When she flips page 1, she sees pages 2 and 3. Each page except the last page will always be
    printed on both sides. The last page may only be printed on the front, given the length of
    the book. If the book is n pages long, and she wants to turn to page p, what is the minimum
    number of pages she will turn? She can start at the beginning or the end of the book.

    Given n and ,p find and print the minimum number of pages Brie must turn in order to arrive at page p.
*/

function pageCount(n, p) {
    /*
     * Write your code here.
     */
    let counter = 0;
    let counterBack = 0;

    for (let i = 1; i < p; i++) {
        if (i % 2 === 1) {
            counter++;
        }

    }

    for (let j = n; j > p; j--) {
        //console.log(counterBack)
        if (j % 2 === 0) {
            counterBack++;
        }
    }


    console.log(counter < counterBack ? counter : counterBack)
    return counter < counterBack ? counter : counterBack
}

pageCount(5,4); //0
pageCount(6,2); //1
pageCount(7,3); //1