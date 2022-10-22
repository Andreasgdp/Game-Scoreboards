export class User {
	uid?: string;
	points?: number;

	constructor(uid: string, points: number) {
		this.uid = uid;
		this.points = points;
	}
}
