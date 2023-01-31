// import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes';



export const getHeroById = (id) => {
  return heroes.find(hero => hero.id === id);
}

// console.log(getHeroById(3));

export const getHeroesByOwner = (owner) => {
  return heroes.filter(heroe => heroe.owner === owner);
}

// console.log(getHeroesByOwner('Marvel'));


// console.log(owners);