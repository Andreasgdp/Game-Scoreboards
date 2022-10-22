import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services/Auth';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  items: MenuItem[];
  username = '';
  password = '';

  signInLoading = false;
  googleSignInLoading = false;

  constructor(public authService: AuthService) {
    this.items = [
      {
        label: 'Home',
        routerLink: ['/'],
        icon: PrimeIcons.HOME,
      },
      {
        label: 'Help',
        icon: PrimeIcons.QUESTION_CIRCLE,
        items: [
          {
            label: 'Contents',
          },
        ],
      },
    ];
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
