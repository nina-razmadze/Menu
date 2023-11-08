import { EventEmitter, Injectable, Input } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppinListService } from '../shopping-list/shoppinlist.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  constructor(private shoppingListService: ShoppinListService) {}

  private recipes: Recipe[] = [
    new Recipe(
      'Big Fat Burger',
      'What else you need say?',
      'https://as2.ftcdn.net/v2/jpg/02/44/61/19/1000_F_244611927_yrh0ZIYwOGTDurVnCMAt7Cq8DR4sBkB0.jpg',

      [new Ingredient('Meat', 1), new Ingredient('Bread', 20)]
    ),
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://img.freepik.com/free-photo/tender-juicy-veal-steak-medium-rare-with-french-fries_2829-19634.jpg?w=2000&t=st=1699384224~exp=1699384824~hmac=92343a7e88c20d2f5c41af0f82d9296c52492405af9704be4681bfa36829ccd5',

      [new Ingredient('Fries', 2), new Ingredient('Meat', 20)]
    ),
  ];
  ingredients: Ingredient[] = [];

  getRecipeIngredients(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
  getRecipe(id: number) {
    return this.recipes[id];
  }
  getRecipes() {
    return this.recipes.slice();
  }
}
