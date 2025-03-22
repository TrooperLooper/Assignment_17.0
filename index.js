let price = prompt ("Enter pricetag (fx. $49.99)", "$");
price = price.replace("$", "");

let priceNumber = parseFloat(price);

let discount = priceNumber*0.10;
let reducedPrice = priceNumber - discount;

console.log("your discount price is $" + reducedPrice);