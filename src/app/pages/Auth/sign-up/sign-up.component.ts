import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '@services/Auth';
import { MenubarService } from '@services/utils';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  items: MenuItem[];
  displayname = '';
  username = '';
  password = '';

  signUpLoading = false;
  googleSignInLoading = false;

  userform: FormGroup = this.fb.group({
    displayname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern('^[a-zA-Z0-9]+$'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    public menuBarService: MenubarService,
    private messageService: MessageService
  ) {
    this.items = menuBarService.getItems();
  }

  ngOnInit(): void {}

  signUp() {
    this.signUpLoading = true;
    this.authService
      .SignUp(this.username, this.password, this.displayname)
      .then(() => {
        this.signUpLoading = false;
      });
  }

  googleSignUp() {
    this.googleSignInLoading = true;
    this.authService
      .GoogleAuth()
      .then(() => {
        this.googleSignInLoading = false;
      })
      .catch((err) => {
        this.messageService.add({
          key: 'signInfo',
          severity: 'error',
          summary: 'Google Sign Up Failed',
          detail: err,
        });
        this.googleSignInLoading = false;
      });
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });

    if (formGroup.valid) {
      this.signUp();
    }
  }
}
