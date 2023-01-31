import { getHeroById } from './08-import-export';


// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const hero = getHeroById(2);
//     resolve(hero);
//     // reject('Some error');
//   }, 2000);
// });


// promesa.then((hero) => {
//   console.log('Hero ', hero);
// }).catch(err => console.warn(err));


const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(1);
      hero ? resolve(hero) : reject('Not hero found');
    }, 2000);
  });
}


getHeroByIdAsync(3)
.then(console.log)
.catch(err => console.warn(err));