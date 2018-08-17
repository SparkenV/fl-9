// Your code goes here
let amountOfMoney = parseFloat(prompt('Enter amount of money', '0'));
let discount = parseFloat(prompt('Enter discount in percent', '0'));



if (amountOfMoney <= 0 || isNaN(amountOfMoney) || typeof amountOfMoney !== 'number' || 
	100 >= discount <= 0 || isNaN(discount) || typeof discount !== 'number') {
    console.log('Invalid data');
} else {
    let savedSum = amountOfMoney*discount/100;

    let priceWithDiscount = amountOfMoney-savedSum;
    

    console.log(`
    Price without discount: ${+amountOfMoney.toFixed(2)}
    Discount: ${+discount.toFixed(2)}%
    Price with discount: ${+priceWithDiscount.toFixed(2)}
    Saved:  ${+savedSum.toFixed(2)}
    `);
}
