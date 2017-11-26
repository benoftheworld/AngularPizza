/**
* @file pizza-add.component.ts
* @module pizza-add
* @desc Controlleur pizza add
* @author Benjamin MARTIN <benjamin.martin@ynov.com>
*/

/**
* @requires Modules
*/
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PizzaService } from '../pizza.service';
import { IngredientService } from '../ingredient.service';
import { Ingredient } from '../ingredient';
import { Pizza } from '../pizza';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pizza-add',
  templateUrl: './pizza-add.component.html',
  styleUrls: ['./pizza-add.component.css']
})

/**
* @class PizzaAddComponent
*/
export class PizzaAddComponent implements OnInit {

  // Declaration des variables
  form: FormGroup;
	data: any;
  pizza: Pizza;
  base64 : string;
  listIngredient : any;
  ingredients : Array<Ingredient>;
  base64textString: String="";

  // Constructeur de la classe
  constructor(private route: ActivatedRoute, private router: Router, public ingredientService : IngredientService, public pizzaService: PizzaService) {
    this.pizza = new Pizza;
    this.form = new FormGroup({
      _id  : new FormControl("", Validators.nullValidator),
      name: new FormControl("", Validators.required),
      img : new FormControl("", Validators.nullValidator),
      description: new FormControl("", Validators.required),
      price: new FormControl("", Validators.required),
    });
  }

  /**
   * @function ngOnInit
   * @desc A l'initialisation
   */
  ngOnInit() {

    // On selectionne tous les ingredients
    this.ingredientService.getAll().subscribe(ingredient => {
      this.listIngredient = ingredient;
    });

    // On récupère l'id dans l'url
    let id = this.route.snapshot.params['id'];

    // Si l'ID est present
    if(id != null){
      this.pizzaService.getOne(id).subscribe(pizza => {
        this.pizza = pizza[0];
        this.form = new FormGroup({
          _id : new FormControl(this.pizza._id),
          name: new FormControl(this.pizza.name, Validators.required),
          description: new FormControl(this.pizza.description, Validators.required),
          img : new FormControl(this.pizza.img, Validators.required),
          price: new FormControl(this.pizza.price, Validators.required),
        });
      });
    }
  }

 /**
  * @function onSubmit
  * @desc A l'envoi du formulaire
  */
  onSubmit(){
    // Si il y a un ID on update
    if(this.pizza._id != null){
      console.log("update");
      this.pizzaService.update(this.pizza._id, this.form.value).subscribe(pizza => {
            this.pizza = pizza;
      });
      this.router.navigate(['/']);
    // Sinon on ajoute
    }else{
      console.log("add");
      this.pizzaService.add(this.form.value).subscribe(pizza => {
            this.pizza = pizza;
      });
      this.router.navigate(['/']);
    }
  }

  /**
   * @function delete
   * @desc Suppression d'une pizza
   */
  delete(){
    console.log('delete');
    if(this.pizza._id != null){
      this.pizzaService.delete(this.pizza._id).subscribe(pizza => {
             this.pizza = pizza;
       });
       this.router.navigate(['/']);
    }
  }

  /**
   * @function handleFileSelect
   * @desc A la selection du fichier
   * @param evt event
   * @source https://plnkr.co/edit/PFfebmnqH0eQR9I92v0G?p=preview
   */
  handleFileSelect(evt){
    var files = evt.target.files;
    var file = files[0];
    if (files && file) {
        var reader = new FileReader();
        reader.onload =this._handleReaderLoaded.bind(this);
        reader.readAsBinaryString(file);
    }
  }

  /**
   * @function _handleReaderLoaded
   * @desc
   * @param readerEvt
   * @source https://plnkr.co/edit/PFfebmnqH0eQR9I92v0G?p=preview
   */
  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    console.log(btoa(binaryString));
  }

  /**
   * @function addIngredient
   * @desc Ajoute un id ingredient dans ingredients pizza.
   * @param id Id de l'ingredient
   */
  addIngredient(id){
    this.pizza.ingredients.push(id);
  }
}
