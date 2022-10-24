import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { PointGivenScoreboard } from '@models/PGS';
import { AuthService } from '@services/Auth';

// Point Given Scoreboard Service
@Injectable({
  providedIn: 'root',
})
export class PgsService {
  private dbPath = '/pointGivenScoreboards';

  db: AngularFireDatabase;

  constructor(public authService: AuthService, db: AngularFireDatabase) {
    this.db = db;
  }

  getAll(): AngularFireList<PointGivenScoreboard> {
    return this.db.list(this.dbPath + '/' + this.authService.userData.uid);
  }

  get(key: string): AngularFireList<PointGivenScoreboard> {
    return this.db.list(
      this.dbPath + '/' + this.authService.userData.uid + '/' + key
    )
  }

  create(tutorial: PointGivenScoreboard): any {
    return this.db
      .list(`${this.dbPath}/${this.authService.userData.uid}`)
      .push(tutorial);
  }

  update(key: string, value: any): Promise<void> {
    return this.db
      .list(this.dbPath + '/' + this.authService.userData.uid)
      .update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.db
      .list(this.dbPath + '/' + this.authService.userData.uid)
      .remove(key);
  }

  deleteAll(): Promise<void> {
    return this.db
      .list(this.dbPath + '/' + this.authService.userData.uid)
      .remove();
  }
}
