import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageSerice } from '../shared/data-storage.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private dataStorage: DataStorageSerice) {}
  onSaveData() {
    this.dataStorage.storeRecipes();
  }

  fetchRecipes() {
    this.dataStorage.getRecipes().subscribe();
  }
}
