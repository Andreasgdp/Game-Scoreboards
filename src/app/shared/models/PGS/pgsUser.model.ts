export class PGSUser {
  uid: string;
  displayName: string;
  photoURL: string;
  points: number;

  constructor(uid: string, displayName: string, photoURL: string, points = 0) {
    this.uid = uid;
    this.displayName = displayName;
    this.photoURL = photoURL;
    this.points = points;
  }
}
