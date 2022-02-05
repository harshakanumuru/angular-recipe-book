import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../shared/model/recipe.model';
import { Ingredient } from './../shared/model/ingredient.model';
import { ShoppingListService } from './../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Burger',
      'Prepared with Bread',
      'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/3/n/k/p3596-15815065835e43e01737949.jpg?tr=tr:n-large',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Buns', 2)
      ]
    ),
    new Recipe(
      'Pizza',
      'Prepared with Flour',
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
      [
        new Ingredient('Chicken', 1),
        new Ingredient('Buns', 3)
      ]
      )
  ];
  constructor(private shoppingListService: ShoppingListService) { }
  getRecipes(): Array<Recipe> {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListService.addIngredients(ingredients);
  }
}
