import { Component, OnInit, Input } from '@angular/core';
import Rumor from '../rumor'

@Component({
  selector: 'app-rumor-card',
  templateUrl: './rumor-card.component.html',
  styleUrls: ['./rumor-card.component.scss']
})

export class RumorCardComponent implements OnInit {
	defaultRumor: Rumor = new Rumor({
	    title: 'Gear Thing',
	    imageUrls: ['https://www.warhammer-community.com/wp-content/uploads/2019/04/RumourEngine-Apr16-Content2ujcds.jpg'],
		description: 'This looks like a gear',
		postedDateString: 'Post 01/01/2010',
		isSolved: false,
		pageUrl: '' 
	});
	
	@Input() rumor: Rumor;

	constructor() { 
		
	}

	ngOnInit() {
		this.rumor = this.rumor || this.defaultRumor;
  }

}
