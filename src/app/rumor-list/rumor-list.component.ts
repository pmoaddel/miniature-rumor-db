import { Component, OnInit } from '@angular/core';
import { RumorService } from '../rumor.service';
import Rumor from '../rumor';


@Component({
 	selector: 'app-rumor-list',
    templateUrl: './rumor-list.component.html',
	styleUrls: ['./rumor-list.component.scss']
})
export class RumorListComponent implements OnInit {

    rumors: Rumor[] = [];

  	constructor (private rumorService: RumorService) {
  	}

  	ngOnInit() {
		this.rumorService.getAll().subscribe((rumors: Rumor[]) => {
			this.rumors = rumors;
		});
  	}
}