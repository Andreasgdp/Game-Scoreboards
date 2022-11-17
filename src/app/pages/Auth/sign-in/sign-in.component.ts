import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '@services/Auth';
import { MenubarService } from '@services/utils';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  items: MenuItem[];
  username = '';
  password = '';

  userform: FormGroup = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  signInLoading = false;
  googleSignInLoading = false;

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    public menuBarService: MenubarService
  ) {
    this.items = menuBarService.getItems();
  }

  signIn() {
    this.signInLoading = true;
    this.authService.SignIn(this.username, this.password).then(() => {
      this.signInLoading = false;
    });
  }

  googleSignIn() {
    this.googleSignInLoading = true;
    this.authService.GoogleAuth().then(() => {
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
  }
}
