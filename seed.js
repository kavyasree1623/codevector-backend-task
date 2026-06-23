const { faker } = require("@faker-js/faker");

for (let i = 0; i < 5; i++) {
  console.log({
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
  });
}