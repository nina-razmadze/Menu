import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is Simply a Test',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
      1
    ),
    new Recipe(
      'A Test Recipe',
      'This is Simply a Test',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
      2
    ),
  ];
}
