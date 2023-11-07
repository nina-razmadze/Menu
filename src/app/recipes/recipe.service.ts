import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is Simply a Test',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
      1
    ),
    new Recipe(
      'Another Test Recipe',
      'This is Simply a Test',
      'https://cdn.tasteatlas.com//images/toplistarticles/fc20fbcfe5cd4690ba0cb9614192303a.jpg?mw=1300',
      2
    ),
  ];
  recipe: string = '';

  getRecipes() {
    return this.recipes.slice();
  }
  onRemoveRecipe(index: number) {
    if (index >= 0 && index < this.recipes.length) {
      this.recipes.splice(index, 1);
    }
  }
}
