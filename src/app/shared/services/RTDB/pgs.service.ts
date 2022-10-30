import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { PointGivenScoreboard } from '@models/PGS';
import { AuthService } from '@services/Auth';
import { Observable } from 'rxjs';

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

  // Documentation: https://github.com/angular/angularfire/issues/1299#issuecomment-340895715
  getAll(): Observable<PointGivenScoreboard[] | null> {
    return this.db.list<PointGivenScoreboard>(this.dbPath).valueChanges();
  }

  // Documentation: https://github.com/angular/angularfire/issues/1299#issuecomment-340895715
  get(key: string): Observable<PointGivenScoreboard | null> {
    return this.db
      .object<PointGivenScoreboard>(this.dbPath + '/' + key)
      .valueChanges();
  }

  create(tutorial: PointGivenScoreboard): any {
    return this.db.list(this.dbPath).push(tutorial);
  }

  async update(key: string, value: any) {
    await this.db.list(this.dbPath).update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.db.list(this.dbPath).remove(key);
  }

  deleteAll(): Promise<void> {
    return this.db.list(this.dbPath).remove();
  }
}
