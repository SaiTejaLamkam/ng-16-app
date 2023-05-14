import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  registerForm = new FormGroup({
    name: new FormControl('', [Validators.pattern('^[a-zA-Z ]+$'), Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')]),
    confirmPassword: new FormControl('', [Validators.required])
  },confirmPasswordValidator);
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ){}
  OnInit() {

  }
  onSubmit(): void {
    if (this.registerForm.invalid) {
      return;
    }
    this.authenticationService.register(this.registerForm.value).subscribe(
     {
      next: (res) => {
        this.router.navigate(['/login']);
      },
  
      error: (err: any) => { }
     }
    )
  }
}

export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  return password && confirmPassword && password.value === confirmPassword.value ? null :  { confirmPassword: true };
};