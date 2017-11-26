/**
* @file pizza-list.component.ts
* @module pizza-list
* @desc Controlleur pizza list
* @author Benjamin MARTIN <benjamin.martin@ynov.com>
*/

/**
* @requires Modules
*/
import { Component, OnInit,  Input, Output, EventEmitter} from '@angular/core';
import { Pizza } from '../pizza';
import { Ingredient } from '../ingredient';
import { PizzaService } from "../pizza.service";
import { IngredientService } from "../ingredient.service";

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css'],
})

export class PizzaListComponent implements OnInit {

  // declaration des variables
  pizza: Pizza[];
  ingredient : Ingredient[];
  pizzaImage: string;

  // constructeur de la classe
  constructor(private pizzaService: PizzaService, private ingredientService : IngredientService) {
    this.pizzaImage = '../assets/images/4Saisons.jpg';
  }

  /**
   * @function ngOnInit
   * @desc A l'initialisation
   */
  ngOnInit() {

    // On recupere toutes les pizzas
    this.pizzaService.getAll().subscribe(pizza => {
      this.pizza = pizza;
    });

  }
}
