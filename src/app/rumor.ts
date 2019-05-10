export default class Rumor {

  id: string;
	title: string;
	imageUrls: string[];
	pageUrl: string;
	description: string;
	isSolved: boolean;
	postedDateString: string;
	postedDate: Date;


	constructor(json: any) {
    this.id = json.id as string || hashFromString(json.title as string);
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

function hashFromString(title : string) {
  let hash = 0;
  if (title.length == 0) return hash.toString();
  for (var i = 0; i < title.length; i++) {
  	const char = title.charCodeAt(i);
  	hash = ((hash<<5)-hash)+char;
  	hash = hash & hash; // Convert to 32bit integer
  }
  return hash.toString();
}

function guidGenerator(): string {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}
