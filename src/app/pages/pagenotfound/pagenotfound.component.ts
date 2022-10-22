import { Component, OnInit } from '@angular/core';
import { MenubarService } from '@services/utils';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.scss'],
})
export class PagenotfoundComponent implements OnInit {
  items: MenuItem[];

  constructor(public menubarService: MenubarService) {
    this.items = menubarService.getItems();
  }

  ngOnInit(): void {}
}
