/**
* @file ingredient.service.ts
* @module ingredient.service
* @desc Service ingredient
* @author Benjamin MARTIN <benjamin.martin@ynov.com>
*/

/**
* @requires Modules
*/
import { Injectable } from '@angular/core';
import { Ingredient } from './ingredient';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'Rxjs';
import 'rxjs/add/operator/map';

@Injectable()
/**
* @class IngredientService
*/
export class IngredientService {

  constructor(private http: HttpClient) {}

  /**
   * @function getAll
   * @desc Récupère toutes les ingredients
   */
  getAll():Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>('https://pizzaparty-benoftheworld.c9users.io:8080/ingredient/');
  }

  /**
   * @function getOne
   * @param id de l ingredient
   * @desc Récupère un ingredient
   */
  getOne(id : string):Observable<Ingredient> {
    return this.http.get<Ingredient>('https://pizzaparty-benoftheworld.c9users.io:8080/ingredient/'+id);
  }

  /**
   * @function add
   * @param data, données à ajouter
   * @desc Fonction qui ajoute un ingredient
   */
  add(data):Observable<Ingredient>{
    return this.http.post<Ingredient>('https://pizzaparty-benoftheworld.c9users.io:8080/ingredient/', data);
  }

  /**
   * @function update
   * @param id de l ingredient
   * @param data a mettre à jour
   * @desc Met à jour les ingredients
   */
  update(id : string, data):Observable<Ingredient>{
     return this.http.put<Ingredient>('https://pizzaparty-benoftheworld.c9users.io:8080/ingredient/'+id, data);
  }

  /**
   * @function delete
   * @param id de l ingredient
   * @desc Supprime un ingredient
   */
  delete(id : string):Observable<Ingredient>{
    return this.http.delete<Ingredient>('https://pizzaparty-benoftheworld.c9users.io:8080/ingredient/'+id);
  }

}
