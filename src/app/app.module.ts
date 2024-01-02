import { HttpClientModule } from '@angular/common/http';

import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';

import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { LendingPageComponent } from './recipes/lending-page/lending-page.component';

import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

import { ShoppinListService } from './shopping-list/shoppinlist.service';
import { DropdownDirective } from './shared/dropdown.directive';

import { RecipesComponent } from './recipes/recipes.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';

import { RecipeService } from './recipes/recipe.service';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeItemComponent,
    RecipeListComponent,
    LendingPageComponent,
    RecipeEditComponent,
    AuthComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [RecipeService, ShoppinListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
