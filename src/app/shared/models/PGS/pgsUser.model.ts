export class PGSUser {
  uid: string;
  displayName: string;
  photoURL: string;
  score: number;

  constructor(uid: string, displayName: string, photoURL: string, score = 0) {
    this.uid = uid;
    this.displayName = displayName;
    this.photoURL = photoURL;
    this.score = score;
  }
}
