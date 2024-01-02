import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  constructor(private authService: AuthService) {}
  isLogin = true;
  isLoading = false;
  error: string = null;

  onSwitchMode() {
    this.isLogin = !this.isLogin;
  }
  onSubmit(form: NgForm) {
    this.isLoading = true;
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    if (this.isLogin) {
      //
    } else {
      this.authService.signup(email, password).subscribe(
        (response) => {
          this.isLoading = false;
          console.log(response);
        },
        (error) => {
          this.isLoading = false;
          this.error = 'An Error Occurred';
        }
      );
    }
    form.reset();
  }
}
