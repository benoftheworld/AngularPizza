/**
* @file pizza.ts
* @module pizza
* @desc Model pizza
* @author Benjamin MARTIN <benjamin.martin@ynov.com>
*/

/**
* @requires Modules
*/
import { Ingredient } from './Ingredient';

/**
* @class Pizza
* @param {string} _id de la pizza
* @param {string} nom de la pizza
* @param {number} prix de la pizza
* @param {string} description de la pizza
* @param {string} image de la pizza
* @param {ingredients} id des ingrédients liés à la pizza
*/
export class Pizza {

   _id: string;
   name: string;
   price : number;
   description: string;
   img: string;
   ingredients : Array<Ingredient>;

   constructor() {
     this._id = null;
 		this.name = null;
 		this.description = null;
 		this.img = null;
 		this.price = null;
 		this.ingredients = Array<Ingredient>();
   }

}
