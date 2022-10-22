import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services/Auth';
import { MenubarService } from '@services/utils';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss'],
})
export class VerifyEmailComponent implements OnInit {
  items: MenuItem[];
  constructor(
    public authService: AuthService,
    public menuBarService: MenubarService
  ) {
    this.items = menuBarService.getItems();
  }

  ngOnInit(): void {}
}
