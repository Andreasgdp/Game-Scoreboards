import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { User } from '@models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private dbPath = '/users';

  tutorialsRef: AngularFirestoreCollection<User>;

  constructor(db: AngularFirestore) {
    this.tutorialsRef = db.collection(this.dbPath);
  }

  getUser(id: string) {
    return this.tutorialsRef.doc(id).get();
  }

  getAll(): AngularFirestoreCollection<User> {
    return this.tutorialsRef;
  }

  create(tutorial: User): any {
    return this.tutorialsRef.add({ ...tutorial });
  }

  update(id: string, data: any): Promise<void> {
    return this.tutorialsRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.tutorialsRef.doc(id).delete();
  }
}
