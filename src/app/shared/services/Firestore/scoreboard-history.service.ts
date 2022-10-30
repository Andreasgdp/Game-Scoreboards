import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { ScoreboardHistory } from '@models/ScoreboardHistory';


@Injectable({
  providedIn: 'root',
})
export class ScoreboardHistoryService {
  private dbPath = '/scoreboardHistories';

  tutorialsRef: AngularFirestoreCollection<ScoreboardHistory>;

  constructor(db: AngularFirestore) {
    this.tutorialsRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<ScoreboardHistory> {
    return this.tutorialsRef;
  }

  create(tutorial: ScoreboardHistory): any {
    return this.tutorialsRef.add({ ...tutorial });
  }

  update(id: string, data: any): Promise<void> {
    return this.tutorialsRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.tutorialsRef.doc(id).delete();
  }
}
