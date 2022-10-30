import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdatedScore } from '@components/pgs-player-score-counter/pgs-player-score-counter.component';
import { PGSUser, PointGivenScoreboard } from '@models/PGS';
import { AuthService } from '@services/Auth';
import { PgsService } from '@services/RTDB/pgs.service';
import { MenubarService } from '@services/utils';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
// Documentation: https://angular-training-guide.rangle.io/routing/routeparams

export interface PGSUserAccess {
  owner: boolean;
  admin: boolean;
  player: boolean;
  spectator: boolean;
}

@Component({
  selector: 'games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit, OnDestroy {
  id?: string;
  private sub?: Subscription;
  items: MenuItem[];
  userAccess: PGSUserAccess = {
    owner: false,
    admin: false,
    player: false,
    spectator: false,
  };

  gameDetails?: PointGivenScoreboard;
  usersDetails?: PGSUser[];

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
          this.userAccess = {
            owner: data.owner === this.authService.uid,
            // TODO implement admin functionality
            admin: false,
            player: data.users.some(
              (user) => user.uid === this.authService.uid
            ),
            // TODO implement spectator functionality
            spectator: false,
          };
          if (!Object.values(this.userAccess).some((value) => value)) {
            this.router.navigate(['/404']);
          }
          this.gameDetails = data;
          if (!this.usersDetails) {
            this.usersDetails = data.users;
          } else {
            for (let user of this.gameDetails.users) {
              this.usersDetails.find((u) => u.uid === user.uid)!.score =
                user.score;
            }
          }
        } else {
          this.router.navigate(['/404']);
        }
      });
    });
  }

  updateGame(event: UpdatedScore) {
    if (this.gameDetails && this.id) {
      this.gameDetails.users.find(
        (user) => user.uid === event.playerUid
      )!.score = event.score;
      this.pgsService.update(this.id, { ...this.gameDetails });
    }
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
