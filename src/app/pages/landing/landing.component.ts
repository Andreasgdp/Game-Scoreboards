import { Component, OnInit } from '@angular/core';
import { MenubarService } from '@services/utils';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  items: MenuItem[];
  constructor(public menubarService: MenubarService) {
    this.items = menubarService.getItems();
  }
  ngOnInit() {}

  goToSignIn() {
    // go to /sign-in
  }
}
