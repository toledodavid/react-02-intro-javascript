const characters = ['Goku', 'Vegetta', 'Trunks'];

const [, , p3] = characters;

console.log(p3);

const getArray = () => {
  return ['ABC', 123];
}

const [letters, numbers] = getArray();
console.log(letters, numbers);

const uState = (value) => {
  return [value, () => console.log('Hello World')];
}

const [name, setName] = uState('Pikoro');

console.log(name);
setName();