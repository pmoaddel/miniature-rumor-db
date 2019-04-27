import { Component } from '@angular/core';
import { RumorService } from './rumor.service';
import Rumor from './rumor';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  	title: string = 'miniature-rumor-db';
  	rumors: Rumor[] = [];

  	constructor (private rumorService: RumorService) {
  	}

  	ngOnInit() {
		this.rumorService.getAll().subscribe((rumors: Rumor[]) => {
			this.rumors = rumors;
		});
  	}
}
