import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import firebase from 'firebase/app'
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class AuthService {

  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  private url = environment.apiUrl+'user/auth';

  constructor(public _firebaseAuth: AngularFireAuth, public router: Router,
    private http: HttpClient) {
    this.user = _firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
        }
        else {
          this.userDetails = null;
        }
      }
    );

  }

  signupUser(email: string, password: string) {
    //your code for signing up the new user
  }

  signinUser(email: string, password: string) {
    return this.http.post(this.url, {login: email, password: password})
  }

  logout() {
    this._firebaseAuth.signOut();
    this.router.navigate(['YOUR_LOGOUT_URL']);
  }

  isAuthenticated() {
    return true;
  }
}
