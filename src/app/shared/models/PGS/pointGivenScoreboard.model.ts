import { Guest } from "./guest.model";
import { User } from "./user.model";

export class PointGivenScoreboard {
	title?: string;
	description?: string;
	// list of uid's
	users?: User[];
	// list of player names
	guests?: Guest[];
	
	constructor(title: string, description: string, users: User[], guests: Guest[]) {
		this.title = title;
		this.description = description;
		this.users = users;
		this.guests = guests;
	}
}
