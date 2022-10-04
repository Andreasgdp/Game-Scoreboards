import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  items: MenuItem[];
  username = '';
  password = '';
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
