import { heroes } from './data/heroes';


const getHeroById = (id) => {
  return heroes.find(hero => hero.id === id);
}

console.log(getHeroById(3));

const getHeroesByOwner = (owner) => {
  return heroes.filter(heroe => heroe.owner === owner);
}

console.log(getHeroesByOwner('Marvel'));