import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { ISections } from './ISections';

@Injectable()
export class CourseApiService {

  private _sectionsURL = "http://localhost:3000/catalog/sections";

  constructor(private http: HttpClient) { }

  getSections(): Observable<ISections[]> {
    return this.http
        .get(this._sectionsURL)
        .map((response) => {
            return <ISections[]>response;
        })
        .catch(this.handleError);
  }

  private handleError(error: Response) {
      return Observable.throw(error.statusText);
  }


}
