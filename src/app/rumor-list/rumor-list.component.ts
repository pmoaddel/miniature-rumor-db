import { Component, OnInit, Input } from '@angular/core';
import { RumorService } from '../rumor.service';
import Rumor from '../rumor';


@Component({
 	selector: 'app-rumor-list',
  templateUrl: './rumor-list.component.html',
	styleUrls: ['./rumor-list.component.scss']
})
export class RumorListComponent implements OnInit {
    @Input() displayNumber: number;

    rumors: Rumor[] = [];

  	constructor (private rumorService: RumorService) {
  	}

  	ngOnInit() {
  		this.rumorService.getAll().subscribe((rumors: Rumor[]) => {
  			this.rumors = this.displayNumber ? rumors.splice(0, this.displayNumber) : rumors;
  		});
  	}
}