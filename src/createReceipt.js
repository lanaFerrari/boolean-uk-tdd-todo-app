
const createReceipt = (basket) =>{
let receipt = ""

if(basket.lenght === 0){
    receipt =``
}else{
     basket.forEach(item => 
    receipt += `${item.name} | ${item.price} | ${item.quantity}`
);
// const array1 = ['a', 'b', 'c'];
// array1.forEach(element => console.log(element));
// // expected output: "a"
// // expected output: "b"
// // expected output: "c"
}

return receipt
}

module.exports = createReceipt;