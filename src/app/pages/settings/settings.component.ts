import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services/Auth';
import { MenubarService } from '@services/utils';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  items: MenuItem[];

  constructor(
    public authService: AuthService,
    public menuBarService: MenubarService
  ) {
    this.items = menuBarService.getItems();
  }

  ngOnInit(): void {}
}
