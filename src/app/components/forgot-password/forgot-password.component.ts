import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  passwordResetEmail = '';
  items: MenuItem[];
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
}
