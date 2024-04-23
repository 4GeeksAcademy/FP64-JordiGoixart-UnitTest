function suma(a, b) {
    return a + b;
  }


function fromDollarToYen (dollar) {
 return dollar * 154.83
}

function fromEuroToDollar (euro) {
    return euro * 1.07
}

function fromYanToPound (yan) {
    return yan * 0.0053
}
 
module.exports = {suma, fromDollarToYen, fromEuroToDollar, fromYanToPound};