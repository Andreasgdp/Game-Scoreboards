import { Component, OnInit } from '@angular/core';
import { Database, onValue } from '@angular/fire/database';
import { ref, set } from '@firebase/database';
import { MessageService, PrimeNGConfig } from 'primeng/api';

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
    // listen to changes in the database
    onValue(ref(this.db, 'test'), (snapshot) => {
      console.log(snapshot.val());
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
    set(ref(this.db, 'test'), 'test ' + Math.random());
  }

  clearToasts(_event: Event) {
    this.messageService.clear();
  }
}
