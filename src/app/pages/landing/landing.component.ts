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

  openGithub() {
    window.open('https://github.com/Andreasgdp/Game-Scoreboards', '_blank');
  }

  joinDiscord() {
    window.open('https://discord.gg/MjqJzFzGz5', '_blank');
  }
}
