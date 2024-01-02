import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}
@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=BAFC_6zh2g9P4nsvHKAtHylbrRvzUGF1Cua9JniQ1jsio_T_jNn71km1hznCQ4BI8eHn9oSuJCTUbFWIzm_ghGg',
      { email: email, password: password, returnSecureToken: true }
    );
  }
}
