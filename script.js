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

const totalsum = document.querySelector('.basket__total_sum');
totalsum.innerHTML = a + b + c + d;

let coupon = 20;
const totaltotal = document.querySelector('.basket__total_total');
let couponbutton = document.querySelector('button');
let totaltotalsum = (totalsum.innerHTML * (100-20)) / 100;
let saleSum = document.querySelector('.saleSum')


function makeClick(){
console.log('coupon used!');
totaltotal.innerHTML  = totaltotalsum;
saleSum.innerHTML = 'Итого со скидкой:';
console.log(totaltotal.innerHTML);
}

couponbutton.addEventListener('click', makeClick); 







