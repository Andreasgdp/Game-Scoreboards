import { Component, OnInit } from '@angular/core';
import { Database, onValue } from '@angular/fire/database';
import { ref, set } from '@firebase/database';
import { MessageService, PrimeNGConfig } from 'primeng/api';

// TODO use this for inspiration https://fireship.io/lessons/realtime-presence-angular-firebase/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService],
})
export class AppComponent implements OnInit {
  constructor(
    private primengConfig: PrimeNGConfig,
    private db: Database,
    private messageService: MessageService
  ) {}
  value = 'Not set';

  ngOnInit() {
    this.primengConfig.ripple = true;
    onValue(ref(this.db, '.info/connected'), (snapshot) => {
      this.messageService.add({
        severity: 'info',
        summary: snapshot.val() ? 'Connected' : 'Disconnected',
        detail: 'Via MessageService',
      });
    });

    // listen to changes in the database
    onValue(ref(this.db, 'test'), (snapshot) => {
      this.value = snapshot.val();
      this.messageService.add({
        severity: 'success',
        summary: this.value,
        detail: 'Via MessageService',
      });
    });
  }

  title = 'game-scoreboards';

  handleClick(_event: Event) {
    // check connection to firebase

    set(ref(this.db, 'test'), 'test ' + Math.random()).catch((error) => {
      this.messageService.add({
        severity: 'error',
        summary: error,
        detail: 'Via MessageService',
      });
    });
  }

  clearToasts(_event: Event) {
    this.messageService.clear();
  }
}
