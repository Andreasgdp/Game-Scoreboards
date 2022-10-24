import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services/Auth';
import { MenubarService } from '@services/utils';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.scss'],
})
export class PagenotfoundComponent implements OnInit {
  items: MenuItem[];

  constructor(
    public menubarService: MenubarService,
    public authService: AuthService
  ) {
    this.items = menubarService.getItems();
  }

  ngOnInit(): void {}
}
