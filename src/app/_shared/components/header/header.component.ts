import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLoggedIn:boolean = false;
  userDetails: any;
  constructor(private authenticationService: AuthenticationService) {

  }

  ngOnInit() {
    this.authenticationService.currentUserSubject.subscribe(res => {
      this.isLoggedIn = res && res.id ? true : false;
      this.userDetails = res;
    })
  }

  logout(){
    this.authenticationService.logout();
  }
}
