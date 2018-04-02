import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { IMajors } from './IMajors';
import { ICourses } from './ICourses';

@Injectable()
export class CourseApiService {

  private _majorsURL = "http://localhost:3000/catalog/majors";
  private _coursesURL = "http://localhost:3000/catalog/courses/";

  constructor(private http: HttpClient) { }

  getMajors(): Observable<IMajors[]> {
    return this.http
        .get(this._majorsURL)
        .map((response) => {
            return <IMajors[]>response;
        })
        .catch(this.handleError);
  }

  getCourses(major): Observable<ICourses[]> {
    return this.http
        .get(this._coursesURL+major)
        .map((response) => {
            return <ICourses[]>response;
        })
        .catch(this.handleError);
  }

  private handleError(error: Response) {
      return Observable.throw(error.statusText);
  }
}
