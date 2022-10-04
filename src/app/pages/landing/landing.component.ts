import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  items: MenuItem[];
  constructor() {
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
  ngOnInit() {}

  goToSignIn() {
    // go to /sign-in
  }
}
