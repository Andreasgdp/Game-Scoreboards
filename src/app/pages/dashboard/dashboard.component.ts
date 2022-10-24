import { Component, OnInit } from '@angular/core';
import { PlayerScoreControlComponent } from '@components/player-score-control/player-score-control.component';
import { AuthService } from '@services/Auth';
import { MenubarService } from '@services/utils';
import { MenuItem } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DialogService],
})
export class DashboardComponent implements OnInit {
  items: MenuItem[];
  constructor(
    public authService: AuthService,
    public dialogService: DialogService,
    public menubarService: MenubarService
  ) {
    this.items = menubarService.getItems();
  }

  ngOnInit(): void {}

  showPGS() {
    // Documentation: https://www.primefaces.org/primeng/dynamicdialog
    this.dialogService.open(PlayerScoreControlComponent, {
      header: 'Create a custom scoreboard',
      width: '80%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
    });
  }
}
