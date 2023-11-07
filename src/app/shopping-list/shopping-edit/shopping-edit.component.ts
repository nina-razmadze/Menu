import { Component, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppinListService } from '../shoppinlist.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor(private shoppingListService: ShoppinListService) {}

  onAddItem() {
    const ingName = this.nameInput.nativeElement.value;
    const ingamount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingamount);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
