import { Injectable } from '@angular/core';
import { HttpHeaders, HttpResponse, } from '@angular/common/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }
  private headers = new HttpHeaders({
    'Content-Type': 'application/json;charset=UTF-8',
    });
  postGroup(data: any): Observable<any> {
    return this.http.post(environment.apiBaseUrl+ 'groups/new', data, {headers: this.headers})
  }

  getGroups(): Observable<any> {
    return this.http.get(environment.apiBaseUrl + 'groups')
  }

  deleteGroup(data: any): Observable<any> {
    return this.http.delete(environment.apiBaseUrl+ 'groups/' + data + '/delete')
  }
}
