import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'receipe';
  isAuthenticationPage:boolean = false;
  constructor(private router: Router){
    router.events.subscribe((e:any) => {
      if (e instanceof NavigationEnd) {
        this.isAuthenticationPage = (e.url === '/login' || e.url === '/register' || e.url === "/") ? true : false;
      }
    });
  }
}
