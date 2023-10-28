import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() showRecipesEvent = new EventEmitter<boolean>(false);
  @Output() showShoppingList = new EventEmitter<boolean>(false);

  onShowRecipes() {
    this.showRecipesEvent.emit(true);
  }
  onShowShoppinList() {
    this.showShoppingList.emit(true);
  }
}
