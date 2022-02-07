import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username: any = "something@gmail.com";
  isLoggedIn$: Observable<boolean> | undefined;
  constructor(private authservice: AuthService) {
   }

  ngOnInit(): void {
    console.log("Logged in user..");
    this.username = JSON.parse(localStorage.getItem('user') || '{}').email;
    this.isLoggedIn$ = this.authservice.isLoggedIn();
  }
  onLogout()
  {
    this.authservice.logout();
  }
}
