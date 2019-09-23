import { Component, OnInit } from '@angular/core';
import { RumorService } from '../rumor.service';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-rumor-submit',
  templateUrl: './rumor-submit.component.html',
  styleUrls: ['./rumor-submit.component.scss']
})
export class RumorSubmitComponent implements OnInit {
  url = '';
  error: any;
  results: any;

  constructor(private rumorService: RumorService) {
  }

  submitRumor() {
    this.error = '';
    this.results = '';
    console.log('submitting rumor', 'url', this.url);
    this.rumorService.submit(this.url).pipe(
      catchError((err) => {
        this.error = err;
        throw err;
      })
    ).subscribe((results) => {
      console.log('result', results);
      this.results = results;
    });
  }

  ngOnInit() {
  }

}
