import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import Rumor from './rumor';

@Injectable({
  providedIn: 'root'
})
export class RumorService {
	rumorsUrl: string = 'http://localhost:4200/assets/rumors.json';
	private rumors: Rumor[] = [];

 	constructor(
 	 	private http: HttpClient) {

  	}

  	private load(): Observable<any> {
 		  return this.http.get(this.rumorsUrl).pipe(
 			  tap(_ => console.log('loaded rumors')),
        map((jsonRumors: any) => {
					jsonRumors.pages.forEach((page) => {
						this.rumors.push(new Rumor(page));
					});
					//sort rumors - newest first
					return this.rumors.sort((a: Rumor, b: Rumor) => {
						return a.postedDate > b.postedDate ? - 1 : a.postedDate < b.postedDate ? 1 : 0;
					});
        })
      );
	  }

	getAll(): Observable<Rumor[]> {
    const rumors$ : Observable<Rumor[]> = this.rumors.length ? of(this.rumors) : this.load();
    return rumors$.pipe(
      map((rumors) => {
        return rumors.slice();
      }));
	}

  get(id: string): Observable<Rumor> {
    let rumors$ : Observable<Rumor[]> = this.rumors.length ? of(this.rumors) : this.load();
    return rumors$.pipe(
      map((rumors) => {
        return this.rumors.find((rumor) => { return rumor.id === id; });
      })
    );
  }
}
