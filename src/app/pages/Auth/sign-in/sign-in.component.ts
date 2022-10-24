import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services/Auth';
import { MenubarService } from '@services/utils';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  items: MenuItem[];
  username = '';
  password = '';

  signInLoading = false;
  googleSignInLoading = false;

  constructor(
    public authService: AuthService,
    public menuBarService: MenubarService
  ) {
    this.items = menuBarService.getItems();
  }

  ngOnInit(): void {}

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
}
