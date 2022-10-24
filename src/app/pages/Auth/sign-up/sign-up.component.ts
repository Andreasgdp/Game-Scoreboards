import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services/Auth';
import { MenubarService } from '@services/utils';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  items: MenuItem[];
  username = '';
  password = '';
  constructor(
    public authService: AuthService,
    public menuBarService: MenubarService
  ) {
    this.items = menuBarService.getItems();
  }

  ngOnInit(): void {}
}
