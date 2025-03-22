let price = prompt ("Enter pricetag (fx. $49.99)", "$");
let priceNumber = parseFloat(price);

price = price.replace("$", "");

let discount = priceNumber*0.10;
let reducedPrice = priceNumber - discount;

console.log(reducedPrice);
console.log("your discount price is $" + reducedPrice);