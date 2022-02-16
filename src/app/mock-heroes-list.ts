import { Hero } from './hero.service';

export const HEROES: Hero[] = [
  { id: 11, name: 'Dr Simpático', power:"lanzar zapatillas" , alterEgo:"Paco" },
  { id: 12, name: 'Mr. Gracioso', power:"lanzar huevos" , alterEgo:"Juan" },
  { id: 13, name: 'Señor Risas', power:"contar chistes malos" , alterEgo:"pepito" },
  { id: 14, name: 'Dr. Simpática', power:"lanzar zapatillas a velocidad extrema" , alterEgo:"Pepa" },


];

//Esto se lo pasamos a heroes.componenet para cargar el mock y poder mostrar la lista de héroes.
