import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedInGuard: boolean =  false; //variable for Router Guard
  constructor(private afauth: AngularFireAuth, private toaster: ToastrService, private route: Router) { }
  login(email: any, password: any)
  {
      this.afauth.signInWithEmailAndPassword(email, password).then(logRef=>{
        this.toaster.success("Logged in successfully");
        this.loadUser();
        this.loggedIn.next(true);
        this.isLoggedInGuard = true; //variable for Router Guard
        this.route.navigate(['/']);
      }).catch(e=>{
        this.toaster.warning(e);
      })
  }

  loadUser()
  {
    this.afauth.authState.subscribe(user =>{
      console.log("User Details");
      console.log(user);
      console.log(JSON.parse(JSON.stringify(user)));
      localStorage.setItem('user',JSON.stringify(user));
    })
  }

  logout()
  {
    this.afauth.signOut().then(()=>{
      this.toaster.success("User Logged out Successfully");
      localStorage.removeItem('user');
      this.loggedIn.next(false); //variable for Router Guard
      this.route.navigate(['/login']);
    })
  }

  isLoggedIn() {
    return this.loggedIn.asObservable();
  }

}
