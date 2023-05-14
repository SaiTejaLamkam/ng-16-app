import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { CommonService } from 'src/app/_services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    loginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')])
      });
      constructor(
        private authenticationService: AuthenticationService,
        private router: Router,
        private commonService: CommonService
      ){}
      OnInit() {
    
      }
      onSubmit(): void {
        if (this.loginForm.invalid) {
          return;
        }
        const { email, password } = this.loginForm.value;
        this.authenticationService.login(email,password).subscribe(
         {
          next: (res) => {
            this.router.navigate(['/dashboard']);
          },
      
          error: (err: any) => { 
            //this.commonService.showNotification("Error on Login");
          }
         }
        )
      }
}