import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  items: MenuItem[];
  constructor(public authService: AuthService) {
    this.items = [
      {
        label: 'Home',
        routerLink: ['/dashboard'],
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