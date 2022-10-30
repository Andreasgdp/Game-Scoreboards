import { Timestamp } from '@angular/fire/firestore';
import { Guest } from './guest.model';
import { PGSUser } from './pgsUser.model';

export class PointGivenScoreboard {
  title: string;
  description: string;
  owner: string;
  // list of uid's
  users: PGSUser[];
  // list of player names
  guests: Guest[];
  createdDate: Timestamp;

  constructor(
    title: string,
    description: string,
    owner: string,
    users: PGSUser[],
    guests: Guest[]
  ) {
    this.title = title;
    this.description = description;
    this.owner = owner;
    this.users = users;
    this.guests = guests;
    this.createdDate = Timestamp.fromDate(new Date());
  }
}
