
import { http } from './../../../../projeto-angular/curso_adonis_api_yt/config/app';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Moment } from '../moment';
import { response } from './../response';

import { environment } from '../../environments/environment';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class MomentService {

  private baseApiUrl = environment.baseApiUrl
  private apiUrl = '${this.baseApiUrl}api/moments '
  constructor( private http: HttpClient) { }

  getMoments(): Observable<response<Moment[]>> {
   return this.http.get<response<Moment[]>>(this.apiUrl)

  }

  getMoment(id: number): Observable<response<Moment>> {
    const url = '${this.apiUrl}/${id}';
    return this.http.get<response<Moment>>(url);

  }

  createMoment(FormData: FormData) : Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, FormData) ;
}
removeMoment(id:number){
  const url = `${this.apiUrl}/${id}`;
  return this.http.delete(url);
}
updateMoment(id: number, formData: FormData): Observable<FormData>{
  const url = `${this.apiUrl}/${id}`;
  return this.http.put<FormData>(url, formData);

}

}
