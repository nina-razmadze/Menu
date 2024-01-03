import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { DataStorageSerice } from '../shared/data-storage.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;
  constructor(
    private dataStorage: DataStorageSerice,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
  onSaveData() {
    this.dataStorage.storeRecipes();
  }

  fetchRecipes() {
    this.dataStorage.getRecipes().subscribe();
  }
}
