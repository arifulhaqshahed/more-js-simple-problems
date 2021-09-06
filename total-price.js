const products = [
    {
        name: 'phone',
        price: 25000
    },
    {
        name: 'laptop',
        price: 55000
    },
    {
        name: 'shirt',
        price: 5000
    },
    {
        name: 'bag',
        price: 3000
    }
]
let total = 0;
for (const product of products) {
    total = total + product.price;
}
// console.log(total)


const cart = [
    {
        name: 'phone',
        price: 25000,
        quantity: 2
    },
    {
        name: 'laptop',
        price: 55000,
        quantity: 1
    },
    {
        name: 'shirt',
        price: 1000,
        quantity: 4
    },
    {
        name: 'bag',
        price: 3000,
        quantity: 2
    }
]
let totalCost = 0;
for (const product of cart) {
    const productPrice = product.price * product.quantity;
    totalCost = totalCost + productPrice;
}
console.log(totalCost);