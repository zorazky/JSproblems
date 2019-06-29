/*
Anna and Brian are sharing a meal at a restuarant and they agree to split the bill equally.
Brian wants to order something that Anna is allergic to though, and they agree that
Anna won't pay for that item. Brian gets the check and calculates Anna's portion. You
must determine if his calculation is correct.

For example, assume the bill has the following prices: bill = [2,4,6] . Anna declines to eat item k = bill[2]  which
costs 6. If Brian calculates the bill correctly, Anna will pay (2+4)/2 = 3. If he includes the cost of bill[2],
he will calculate (2+4+6)/2 = 6. In the second case, he should refund 3 to Anna.
*/



function bonAppetit(bill, k, b) {

    let resultado;
    
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    
    let farePart = (bill.reduce(reducer) - bill[k]) / 2
    //console.log(farePart)
    
    if (farePart === b) {
      resultado = "Bon Appetit";
    } else {
      resultado = b - farePart;
    }
    
    console.log(resultado)
    return resultado
  
  }