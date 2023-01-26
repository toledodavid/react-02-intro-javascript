const firstName = 'David';
const lastName = 'Toledo';

const fullName = `${firstName} ${lastName}`;

console.log(fullName);


function getGreeting(name) {
  return 'Hello ' + name;
}


console.log(`This is a text: ${getGreeting('Peter')}`);