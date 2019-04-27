export default class Rumor {
	title: string;
	imageUrls: string[];
	pageUrl: string;
	description: string;
	isSolved: boolean;
	postedDateString: string;
	postedDate: Date;


	constructor(json: any) {
		this.title = json.title as string;
		this.imageUrls = json.imageUrls as string[];
		this.pageUrl = json.pageUrl as string;
		this.description = json.description as string;
		this.postedDateString = json.datePosted as string;
		this.isSolved = false;

		if (json.datePosted) {
			//example Posted 07/06/2017
			let dateOnly: string = json.datePosted.toLowerCase().replace('posted ', '');
			let parts: string[] = dateOnly.split('/');
			let day: number = parseInt(parts[0]);
			let month: number = parseInt(parts[1]);
			let year: number = parseInt(parts[2]);
			this.postedDate = new Date(year, month, day);
		}
	}
}