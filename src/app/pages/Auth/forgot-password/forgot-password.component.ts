import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services/Auth';
import { MenubarService } from '@services/utils';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  passwordResetEmail = '';
  items: MenuItem[];
  constructor(
    public authService: AuthService,
    public menuBarService: MenubarService
  ) {
    this.items = menuBarService.getItems();
  }

  ngOnInit(): void {}
}
