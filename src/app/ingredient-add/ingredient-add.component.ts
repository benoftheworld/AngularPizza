import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IngredientService } from '../ingredient.service';
import { Ingredient } from '../ingredient';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ingredient-add',
  templateUrl: './ingredient-add.component.html',
  styleUrls: ['./ingredient-add.component.css']
})
export class IngredientAddComponent implements OnInit {

  form: FormGroup;
	data: any;
  ingredient: Ingredient;

  constructor(private route: ActivatedRoute, private router: Router, public ingredientService: IngredientService) {

    this.form = new FormGroup({
      _id  : new FormControl("", Validators.nullValidator),
      name: new FormControl("", Validators.required),
      weight : new FormControl("", Validators.nullValidator),
      price: new FormControl("", Validators.required),
    });
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    if(id != null){
      this.ingredientService.getOne(id).subscribe(ingredient => {
        this.ingredient = ingredient[0];
        console.log(this.ingredient);
        this.form = new FormGroup({
          _id : new FormControl(this.ingredient._id),
          name: new FormControl(this.ingredient.name, Validators.required),
          weight: new FormControl(this.ingredient.weight, Validators.required),
          price: new FormControl(this.ingredient.price, Validators.required),
        });
      });
    }
  }

  onSubmit(){
    console.log(this.ingredient)
    if(this.ingredient._id != null){
      console.log("update");
      this.ingredientService.update(this.ingredient._id, this.form.value).subscribe(pizza => {
            this.ingredient = pizza;
      });
    }else{
      console.log("add");
      this.ingredientService.add(this.form.value).subscribe(pizza => {
            this.ingredient = pizza;
      });
    }
  }

  delete(){
    console.log('delete');
    if(this.ingredient._id != null){
      this.ingredientService.delete(this.ingredient._id).subscribe(pizza => {
             this.ingredient = pizza;
       });
    }
  }


}
