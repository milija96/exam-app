import { Injectable } from '@angular/core';
import { Subject, ReplaySubject, Observable } from 'rxjs';
import { ISubjects } from '../models/models';
import { HttpHeaders, HttpResponse, } from '@angular/common/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  currentSubject$: Subject<any> = new ReplaySubject(null);

  private headers = new HttpHeaders({
    'content-type': 'application/json' ,

  });

  constructor(private http: HttpClient) { }


  getExams(): Observable<any> {
    return this.http.get(environment.apiBaseUrl + 'kolokvijumi');
  }

  addExam(data: any): Observable<any> {
    return this.http.post(environment.apiBaseUrl + 'kolokvijumi/novi',   {
      'naziv_kolokvijuma': 'Matematika'

  }, {headers: this.headers})
  
  }
}
