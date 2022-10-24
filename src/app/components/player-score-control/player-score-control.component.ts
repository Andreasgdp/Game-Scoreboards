import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { User } from '@models/user.model';
import { UserService } from '@services/Firestore/user.service';

@Component({
  selector: 'app-player-score-control',
  templateUrl: './player-score-control.component.html',
  styleUrls: ['./player-score-control.component.scss'],
})
export class PlayerScoreControlComponent implements OnInit {
  users: User[] = [];

  selectedUsers?: User[] = [];

  constructor(public userService: UserService, public cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.userService
      .getAll()
      .snapshotChanges()
      .subscribe((data) => {
        this.users = data.map((e) => {
          return {
            id: e.payload.doc.id,
            ...(e.payload.doc.data() as User),
          } as User;
        });
      });
    this.cd.detectChanges();
  }

  onUserChange(event: any) {
    this.selectedUsers = event.value;
  }

  startGame() {
    console.log(this.selectedUsers);
  }
}
