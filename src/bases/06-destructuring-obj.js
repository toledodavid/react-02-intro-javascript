const person = {
  name: 'Tony',
  age: 40,
  key: 'Ironman'
};


const { name, age:edad } = person;

console.log(name);
console.log(edad);


const uContext = ({key, age, name, range = 'Capitan'}) => {
  // console.log(name, age, range);

  return {
    keyName: key,
    time: age,
    latlng: {
      lat: 12312,
      lng: -498787
    }
  }
}

const {keyName, time, latlng: {lat, lng}} = uContext(person);
console.log(keyName, time);
console.log(lat, lng);