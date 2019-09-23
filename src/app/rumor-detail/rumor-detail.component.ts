import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, flatMap, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { RumorService } from '../rumor.service';
import Rumor from '../rumor';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-rumor-detail',
  templateUrl: './rumor-detail.component.html',
  styleUrls: ['./rumor-detail.component.scss']
})
export class RumorDetailComponent implements OnInit {
  rumor: Rumor;

  constructor(private route: ActivatedRoute, private rumorService: RumorService) {
  }

  ngOnInit() {
    this.route.params.pipe(
      map((p) => {
        return p.id;
      }),
      flatMap((id) => {
        return this.rumorService.get(id)
      }),
      tap((rumor) => {
        console.log('rumor', rumor);
        this.rumor = rumor
      })
    ).subscribe();
  }
}
