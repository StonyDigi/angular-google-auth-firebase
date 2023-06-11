import { Guid } from "guid-typescript";

export class Trip {
    id: string = Guid.create().toString();
	from: string = '';
	to: string = '';
	level: number = 1;
	creatorEmail: string = '';
	creatorName: string = '';
	distance: number = 0;
}
