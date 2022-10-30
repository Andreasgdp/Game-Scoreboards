import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PGSUser, PointGivenScoreboard } from '@models/PGS';
import { AuthService } from '@services/Auth';
import { UserService } from '@services/Firestore/user.service';
import { PgsService } from '@services/RTDB/pgs.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'player-score-control',
  templateUrl: './player-score-control.component.html',
  styleUrls: ['./player-score-control.component.scss'],
})
export class PlayerScoreControlComponent implements OnInit {
  users: PGSUser[] = [];

  selectedUsers: PGSUser[] = [];

  constructor(
    public userService: UserService,
    public authService: AuthService,
    public pgsService: PgsService,
    public router: Router,
    public ref: DynamicDialogRef
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
      this.authService.uid,
      this.selectedUsers,
      []
    );

    const gameKey = await this.pgsService.create(pgs).then((data: any) => {
      return data.key;
    });

    this.ref.close();

    this.router.navigate(['/games', gameKey]);
  }
}
