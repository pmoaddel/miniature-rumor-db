import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-crawler',
  templateUrl: './crawler.component.html',
  styleUrls: ['./crawler.component.scss']
})
export class CrawlerComponent implements OnInit {
  results: string = 'No Results';
  pageToVisit : string = "/gw";

  crawlWeb() {
    console.log('crawl started');
    this.http.get(this.pageToVisit).subscribe(data => {
    // Read the result field from the JSON response.
    console.log('results', data);
    this.results = data['results'];
});

  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }



}
