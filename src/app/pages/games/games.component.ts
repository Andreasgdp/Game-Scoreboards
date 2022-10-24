import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PointGivenScoreboard } from '@models/PGS';
import { AuthService } from '@services/Auth';
import { PgsService } from '@services/RTDB/pgs.service';
import { MenubarService } from '@services/utils';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
// Documentation: https://angular-training-guide.rangle.io/routing/routeparams

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit, OnDestroy {
  id?: string;
  private sub?: Subscription;
  items: MenuItem[];

  gameDetails?: PointGivenScoreboard;

  constructor(
    public authService: AuthService,
    private route: ActivatedRoute,
    public menubarService: MenubarService,
    public pgsService: PgsService
  ) {
    this.items = menubarService.getItems();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.id = params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
      this.pgsService.get(this.id!)
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
