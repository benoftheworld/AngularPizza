/**
* @file app.module.ts
* @module app.module
* @desc Class module racine
* @author Benjamin MARTIN <benjamin.martin@ynov.com>
*/

/**
* @requires Modules
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PizzaAddComponent } from './pizza-add/pizza-add.component';
import { PizzaService } from "./pizza.service";
import { IngredientService } from "./ingredient.service";
import { RouterModule, Routes } from '@angular/router';
import { MaterializeModule } from "angular2-materialize";
import { HttpClientModule } from  '@angular/common/http';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { IngredientAddComponent } from './ingredient-add/ingredient-add.component';

/**
* Gestion des routes
*/
const appRoutes: Routes = [
  { path: 'pizza/list', component: PizzaListComponent },
  { path: 'pizza/add', component: PizzaAddComponent},
  { path: 'pizza/update/:id', component: PizzaAddComponent },
  { path: 'ingredient/list', component: IngredientListComponent },
  { path: 'ingredient/add', component: IngredientAddComponent },
  { path: 'ingredient/update/:id', component: IngredientAddComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PizzaListComponent,
    PizzaAddComponent,
    IngredientListComponent,
    IngredientAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MaterializeModule
  ],
  providers: [PizzaService, IngredientService],
  bootstrap: [AppComponent]
})

export class AppModule { }
