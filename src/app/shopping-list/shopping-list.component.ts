import { Ingredient } from '../shared/ingredient.model';
import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { ShoppinListService } from './shoppinlist.service';
import { Subject, Subscription } from 'rxjs';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private igChangeSub: Subscription;

  constructor(private shoppingListService: ShoppinListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.igChangeSub = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }
  onEditItem(index: number) {
    this.shoppingListService.startediting.next(index);
  }

  // onRemoveIngredient(index: number) {
  //   this.shoppingListService.removeIngredient(index);
  // }
}
