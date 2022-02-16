import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.service'; //Correjimos el nombre del archivo del que carga la clase Hero

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {


  powers = ['Really Smart', 'Super Flexible', //Declara el array de poderes
            'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  //Declara model que es una clase
  //que usaremos para poner los datos por defecto de un Hero de clase Hero.

  submitted = false;
  //Establece el valor por defecto de la clase submitted que usaremos cuando le demos
  //a enviar para guardar o modificar un heroe

  onSubmit() { this.submitted = true; }
  //Establece el método/funcion onSubmit() para que cuando eso ocurra, coja la clase submitted y
  //la iguale a true.



  constructor() { }

  ngOnInit(): void {
  }

}
