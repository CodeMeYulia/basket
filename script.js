const prices = document.querySelectorAll('.basket__item_price');
console.log(prices);
let a = Number(prices[0].innerHTML);
let b = Number(prices[1].innerHTML);
let c = Number(prices[2].innerHTML);
let d = Number(prices[3].innerHTML);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(a+b+c+d);

let totalsum = document.querySelector('.basket__total_sum');

totalsum.innerHTML = a + b + c + d;
console.log(totalsum);


// let totaltotal = () => {(totalsum / 100) * 20};
// totaltotal = Number(totaltotal);
// console.log(totaltotal);
// Button.onclick = function(){totaltotal}

// let totaltotal = document.querySelector('.basket__total_total');
// totaltotal.innerHTML = baskettotal(x) => {
// let x = totalsum;
// result = totalsum / 100 * 20;
// return (result);
// console.log(result);
// };



