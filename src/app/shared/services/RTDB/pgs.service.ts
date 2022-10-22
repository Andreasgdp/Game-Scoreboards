import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { PointGivenScoreboard } from '@models/PGS';

// Point Given Scoreboard Service
@Injectable({
  providedIn: 'root',
})
export class PgsService {
  private dbPath = '/tutorials';

  pgsRef: AngularFireList<PointGivenScoreboard>;

  constructor(db: AngularFireDatabase) {
    this.pgsRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<PointGivenScoreboard> {
    return this.pgsRef;
  }

  create(tutorial: PointGivenScoreboard): any {
    return this.pgsRef.push(tutorial);
  }

  update(key: string, value: any): Promise<void> {
    return this.pgsRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.pgsRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.pgsRef.remove();
  }
}
