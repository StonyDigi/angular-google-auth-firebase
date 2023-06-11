import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth, public router: Router) {
    
  }

  GoogleAuth(){
    return this.AuthLogin(new GoogleAuthProvider());
  }

  logout(){
    localStorage.clear();
    return this.afAuth.signOut();
  }

  isLoggedIn(): boolean{
    let email = localStorage.getItem('email');
    let displayname = localStorage.getItem('displayname');
    return email != null && displayname != null;
  }

  currentUser(){
    let displayname = localStorage.getItem('displayname');
    if (displayname != null){
      return displayname;
    }
    return '';
  }

  currentEmail() {
    let displayname = localStorage.getItem('email');
    if(displayname != null) {
      return displayname;
    }
      return '';
  }

  AuthLogin(provider: any){
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        if (result.user != undefined){
          localStorage.setItem('email', <string>result.user.email);
          localStorage.setItem('displayname', <string>result.user.displayName);
        }
      })
      .catch((error) => {
        alert(error);
      });
  }
}
