
// const greeting = function(name) {
//   return `Hello, ${name}`;
// }

const greeting2 = (name) => {
  return `Hello, ${name}`;
}

const greeting3 = (name) => `Hello, ${name}`;
const greeting4 = () => 'Hello World';


const getUser = () => ({
  uid: 'ABC',
  username: 'elvato'
});


console.log(greeting2('Pikoro'));
console.log(greeting3('Gohan'));
console.log(greeting4());
console.log(getUser());


const getActiveUser = (name) => ({
  uid: '123',
  username: name
});

const activeUser = getActiveUser('David');
console.log(activeUser);