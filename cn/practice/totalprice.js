// Problem statement
// You run a shopping mall and store customer list you use a nested object consisting of different objects. Create a function calculatePrice which should take an object as its parameter. It should be able to calculate the total price after taking price and quantity into account for each product.
// Expected Input
// const goods = {
// apple: { price: 150, quantity: 2 },
// banana: { price: 75, quantity: 3 },
// orange: { price: 125, quantity: 1 }
// }
// Expected Output
// 650

const goods = {
  apple: { price: 150, quantity: 2 },
  banana: { price: 75, quantity: 3 },
  orange: { price: 125, quantity: 1 },
};

function calculatePrice(goods) {
  let totalprice = 0;
  for (let i in goods) {
    totalprice += goods[i].price * goods[i].quantity;
  }
  return totalprice;
}

console.log(calculatePrice(goods));
