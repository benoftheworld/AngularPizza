/**
* @file ingredient-list.component.ts
* @module ingredient-list
* @desc Controlleur ingredient list
* @author Benjamin MARTIN <benjamin.martin@ynov.com>
*/

/**
* @requires Modules
*/
import { Component, OnInit,  Input, Output, EventEmitter} from '@angular/core';
import { Ingredient } from '../ingredient';
import { IngredientService } from "../ingredient.service";

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css'],
})

export class IngredientListComponent implements OnInit {

  //Declaration des variables
  ingredient: Ingredient[];

  //constructeur de la classe
  constructor(private ingredientService: IngredientService ) {}

  /**
   * @function ngOnInit
   * @desc A l'initialisation
   */
  ngOnInit() {
    
    //On recupere tous les ingredients
    this.ingredientService.getAll().subscribe(ingredient => {
      this.ingredient = ingredient;
    });
  }
}
