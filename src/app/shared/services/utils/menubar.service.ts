import { Injectable } from '@angular/core';
import { AuthService } from '@services/Auth';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class MenubarService {
  constructor(public authService: AuthService) {}

  baseSignedInMenuItems: MenuItem[] = [
    {
      label: 'Home',
      routerLink: ['/dashboard'],
      icon: PrimeIcons.HOME,
    },
    {
      label: 'Settings',
      routerLink: ['/settings'],
      icon: PrimeIcons.COG,
    },
  ];

  baseSignedOutMenuItems: MenuItem[] = [
    {
      label: 'Home',
      routerLink: ['/'],
      icon: PrimeIcons.HOME,
    },
  ];

  /**
   * Returns the base menu items for the signed in user
   * @returns MenuItem[]
   */
  getItems() {
    if (this.authService.isLoggedIn) {
      return this.baseSignedInMenuItems;
    } else {
      return this.baseSignedOutMenuItems;
    }
  }

  /**
   * This is a helper function to add a new item to the menu bar.
   * @param customItems The item to add to the menu bar.
   * @returns The new menu bar items.
   */
  getCustomizedItems(customItems: MenuItem[]) {
    if (this.authService.isLoggedIn) {
      return this.baseSignedInMenuItems.concat(customItems);
    } else {
      return this.baseSignedOutMenuItems.concat(customItems);
    }
  }
}
