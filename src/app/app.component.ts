/**
* @file app.component.ts
* @module app.component
* @desc Controlleur racine
* @author Benjamin MARTIN <benjamin.martin@ynov.com>
*/

/**
* @requires Modules
*/
import { Component } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  // declaration des variables
  title = 'Instant convivial';
  backgroundImage: string;
  logo: string;

  //Constructeur de la classe
  constructor() {
    this.backgroundImage = '../assets/images/bg-pizza.jpg';
    this.logo = '../assets/images/logo.png';
  }

  /**
   * @function ngOnInit
   * @desc A l'initialisation
   */
  ngOnInit(){

  }

}
