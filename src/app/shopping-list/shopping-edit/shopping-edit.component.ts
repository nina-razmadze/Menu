import {
  Component,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  getInputValues() {
    const ingName = this.nameInput.nativeElement.value;
    const ingamount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingamount);
    this.ingredientAdded.emit(newIngredient);
  }
}
