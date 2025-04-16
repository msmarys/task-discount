const fullPrice = 3500; 
const discount = 15; 
const discountTotal = (fullPrice * discount) / 100;
const finalPrice = fullPrice - discountTotal;
console.log("Скидка в рублях: " + discountTotal + " ₽");
console.log("Итоговая цена со скидкой: " + finalPrice + " ₽");