import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  isLogin = true;
  @ViewChild('authForm') authForm;

  onSwitchMode() {
    this.isLogin = !this.isLogin;
  }
  onSubmit() {
    console.log(this.authForm.value);
  }
}
