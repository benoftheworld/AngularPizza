/**
* @file pizza.service.ts
* @module pizza.service
* @desc Service pizza
* @author Benjamin MARTIN <benjamin.martin@ynov.com>
*/

/**
* @requires Modules
*/
import { Injectable } from '@angular/core';
import { Pizza } from './pizza';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'Rxjs';
import 'rxjs/add/operator/map';


@Injectable()
/**
* @class PizzaService
*/
export class PizzaService {

  constructor(private http: HttpClient) {}

  /**
   * @function getAll
   * @desc Récupère toutes les pizzas
   */
  getAll():Observable<Pizza[]> {
    return this.http.get<Pizza[]>('https://pizzaparty-benoftheworld.c9users.io:8080/pizza/');
  }

  /**
   * @function getOne
   * @param id de la pizza
   * @desc Récupère une pizza
   */
  getOne(id : string):Observable<Pizza> {
    return this.http.get<Pizza>('https://pizzaparty-benoftheworld.c9users.io:8080/pizza/'+id);
  }

  /**
   * @function add
   * @param data, données à ajouter
   * @desc Fonction qui ajoute une pizza
   */
  add(data):Observable<Pizza>{
    return this.http.post<Pizza>('https://pizzaparty-benoftheworld.c9users.io:8080/pizza/', data);
  }

  /**
   * @function update
   * @param id de la Pizza
   * @param data a mettre à jour
   * @desc Met à jour les pizzas
   */
  update(id : string, data):Observable<Pizza>{
     return this.http.put<Pizza>('https://pizzaparty-benoftheworld.c9users.io:8080/pizza/'+id, data);
  }

  /**
   * @function delete
   * @param id de la pizza
   * @desc Supprime une pizza
   */
  delete(id : string):Observable<Pizza>{
    return this.http.delete<Pizza>('https://pizzaparty-benoftheworld.c9users.io:8080/pizza/'+id);
  }

}
