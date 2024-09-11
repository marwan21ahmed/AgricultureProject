import { NgClass } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  snack: string[] = [];
  isLoading: boolean = false;
  isSuccessfull: boolean = false;
  emailControl = new FormControl('');
  passwordControl = new FormControl('');
  firstNameControl = new FormControl('');
  lastNameControl = new FormControl('');
  @ViewChild('pass') passwordInput!: ElementRef;


  constructor(private authService: AuthService, private router: Router) {}

  signUp() {
    const email = this.emailControl.value;
    const password = this.passwordControl.value;
    const firstName = this.firstNameControl.value;
    const lastName = this.lastNameControl.value;
    if (
      email === null ||
      password === null ||
      firstName === null ||
      lastName === null ||
      !this.validateName() ||
      !this.validateEmail() ||
      !this.validatePassword()
    ) {
      return;
    } else {
      this.isLoading = true;
      this.snack = [];
      this.authService.register(email, password, firstName, lastName).subscribe(
        (res: any) => {
          if (res.success) {
            console.log('User created successfully');
            this.snack.push(
              'User created successfully, redirecting to login page...'
            );

            this.isLoading = false;
            this.isSuccessfull = true;
            setTimeout(() => {
              this.router.navigateByUrl('/login', { state: { email: email } });
            }, 3000);
          }
        },
        (error) => {
          // Handle error from the login function
          console.error(
            'An error occurred during creating your account:',
            error.error.errors
          );
          this.snack.push('Something went wrong while creating your account:');
          this.snack = this.snack.concat(error.error.errors);
          this.isLoading = false;
        }
      );
    }
  }

  validateEmail(): boolean {
    const email = this.emailControl.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === null || email === '') {
      this.snack = ['Email field cannot be empty!'];
      return false;
    } else if (!emailRegex.test(email)) {
      this.snack = ['Please enter a valid email address!'];
      return false;
    } else {
      this.snack = [];
      return true;
    }
  }

  validatePassword(): boolean {
    const password = this.passwordControl.value;
    const passwordRegex = /[A-Z]/;
    if (password === null || password === '') {
      this.snack = ['Password field cannot be empty!'];
      return false;
    } else if (password.length < 8) {
      this.snack = ['Password must be at least 8 characters long!'];
      return false;
    } else if (!passwordRegex.test(password)) {
      this.snack = ['Password must contain at least one uppercase letter!'];
      return false;
    } else {
      this.snack = [];
      return true;
    }
  }

  validateName(): boolean {
    const firstName = this.firstNameControl.value;
    const lastName = this.lastNameControl.value;

    if (firstName === null || firstName === '') {
      this.snack = ['First name cannot be empty!'];
      return false;
    } else if (lastName === null || lastName === '') {
      this.snack = ['Last name cannot be empty!'];
      return false;
    } else {
      this.snack = [];
      return true;
    }
  }



  showPassword: boolean = false;

  togglePasswordVisibility() {
    const inputEl: HTMLInputElement = this.passwordInput.nativeElement;
    this.showPassword = !this.showPassword;
    inputEl.type = this.showPassword ? 'text' : 'password';
  }
}
