import { RecipeService } from '../recipes/recipe.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';
import { tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { take, exhaustMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class DataStorageSerice {
  constructor(
    private http: HttpClient,
    private recipesService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    const recipes = this.recipesService.getRecipes();
    this.http
      .put(
        'https://ng-course-recipe-book-c21a8-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  getRecipes() {
    return this.http
      .get<Recipe[]>(
        'https://ng-course-recipe-book-c21a8-default-rtdb.firebaseio.com/recipes.json'
      )
      .pipe(
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((recipes) => {
          this.recipesService.setRecipes(recipes);
        })
      );
  }
}
