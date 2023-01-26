
const person = {
  name: 'Mark',
  lastName: 'Wings',
  age: 40,
  address: {
    city: 'New York',
    zip: 23232,
    lat: 13.1111,
    lng: 32.5454,
  },
};

// console.table(person);

const person2 = {...person};

person2.name = 'Juan';

console.log(person);
console.log(person2);