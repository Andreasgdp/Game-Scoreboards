import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PointGivenScoreboard } from '@models/PGS';
import { AuthService } from '@services/Auth';
import { PgsService } from '@services/RTDB/pgs.service';
import { MenubarService } from '@services/utils';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
// Documentation: https://angular-training-guide.rangle.io/routing/routeparams

@Component({
  selector: 'games',
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
    public pgsService: PgsService,
    public router: Router
  ) {
    this.items = menubarService.getItems();
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.id = params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
      this.pgsService.get(this.id!).subscribe((data) => {
        if (data) {
          this.gameDetails = data;
        } else {
          this.router.navigate(['/404']);
        }
      });
    });
  }

  updateGame(event: any) {
    if (this.gameDetails) {
      this.gameDetails.users.find((user) => user.uid === event.playerUid)!.score = event.score;
      this.pgsService.update(this.id!, this.gameDetails);
    }
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
