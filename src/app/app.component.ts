import { Component, OnInit } from '@angular/core';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Database, onValue, ref } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { MessageService, PrimeNGConfig } from 'primeng/api';

// TODO use this for inspiration https://fireship.io/lessons/realtime-presence-angular-firebase/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    MessageService,
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
  ],
})
export class AppComponent implements OnInit {
  constructor(
    private primengConfig: PrimeNGConfig,
    private dbRemoveAtSomePoint: Database,
    private db: AngularFireDatabase,
    private messageService: MessageService
  ) {}
  value: string = 'Not set';
  connection = false;

  ngOnInit() {
    this.primengConfig.ripple = true;
    onValue(ref(this.dbRemoveAtSomePoint, '.info/connected'), (snapshot) => {
      this.connection = snapshot.val();
      this.messageService.add({
        severity: 'info',
        summary: snapshot.val() ? 'Connected' : 'Disconnected',
        detail: 'Via MessageService',
      });
    });

    this.db
      .object('test')
      .valueChanges()
      .subscribe((value) => {
        if (!value) {
          return;
        }
        this.value = value as string;
        this.messageService.add({
          severity: 'success',
          summary: this.value,
          detail: 'Via MessageService',
        });
      });
  }

  title = 'game-scoreboards';

  handleClick(_event: Event) {
    if (this.connection) {
      this.db
        .object('test')
        .set('test ' + Math.random())
        .catch((error) => {
          this.messageService.add({
            severity: 'error',
            summary: error,
            detail: 'Via MessageService',
          });
        });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Not connected',
        detail: 'Via MessageService',
      });
    }
  }

  clearToasts(_event: Event) {
    this.messageService.clear();
  }
}
