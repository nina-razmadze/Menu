import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  recivedRecipesShow: boolean;
  recivedShoppingListShow: boolean;

  onShowRecipes(message: boolean) {
    this.recivedRecipesShow = message;
    this.recivedShoppingListShow = false;
  }
  onShowShoppingList(message: boolean) {
    this.recivedShoppingListShow = message;
    this.recivedRecipesShow = false;
  }
}
