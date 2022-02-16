import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.service'; //importamos el servicio de
//hero.service
import { HEROES } from '../mock-heroes-list';  //Cargamos la lista de héroes
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES; //llama a al array de héroes de clase Hero.

  hero : Hero = {
   id: 42,
   name: "SkyDog",
   power: "Fetch any object at any distance",
  alterEgo: "Leslie Rollover"




};

  constructor() { }

  ngOnInit(): void {
  }

}
