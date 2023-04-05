const prices = document.querySelectorAll('.basket__item_price');
console.log(prices);
const a = Number(prices[0].innerHTML);
const b = Number(prices[1].innerHTML);
const c = Number(prices[2].innerHTML);
const d = Number(prices[3].innerHTML);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(a+b+c+d);

const totalsum = document.querySelector('.basket__total_sum');
totalsum.innerHTML = a + b + c + d;

let coupon = 20;
document.querySelector('button').innerHTML = "Использовать купон на " + coupon + "%";

const totaltotal = document.querySelector('.basket__total_total');
const couponbutton = document.querySelector('button');
const totaltotalsum = (totalsum.innerHTML * (100 - coupon)) / 100;
const saleSum = document.querySelector('.saleSum')


function makeClick(){
console.log('coupon used!');
totaltotal.innerHTML  = totaltotalsum;
saleSum.innerHTML = 'Итого со скидкой:';
console.log(totaltotal.innerHTML);
document.querySelector('button').innerHTML = "Купон применен!"
}

couponbutton.addEventListener('click', makeClick); 







