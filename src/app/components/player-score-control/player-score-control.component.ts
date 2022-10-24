import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PGSUser, PointGivenScoreboard } from '@models/PGS';
import { UserService } from '@services/Firestore/user.service';
import { PgsService } from '@services/RTDB/pgs.service';

@Component({
  selector: 'app-player-score-control',
  templateUrl: './player-score-control.component.html',
  styleUrls: ['./player-score-control.component.scss'],
})
export class PlayerScoreControlComponent implements OnInit {
  users: PGSUser[] = [];

  selectedUsers: PGSUser[] = [];

  constructor(
    public userService: UserService,
    public pgsService: PgsService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.userService
      .getAll()
      .snapshotChanges()
      .subscribe((data) => {
        this.users = data.map((e) => {
          const user = e.payload.doc.data();
          const pgsUser = new PGSUser(
            user.uid,
            user.displayName,
            user.photoURL
          );
          return pgsUser;
        });
      });
  }

  onUserChange(event: any) {
    this.selectedUsers = event.value;
  }

  async startGame() {
    const pgs = new PointGivenScoreboard(
      'test',
      'test',
      this.selectedUsers,
      []
    );

    const gameKey = await this.pgsService.create(pgs).then((data: any) => {
      return data.key;
    });

    console.log('game', gameKey);
    this.router.navigate(['/games', gameKey]);
  }
}
