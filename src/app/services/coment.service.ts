import { response } from '../response';
import { http } from '../../../../projeto-angular/curso_adonis_api_yt/config/app';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Response } from 'express';
import { Comment } from '../comment';

@Injectable({
  providedIn: 'root'
})
export class ComentService {
  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}api/moments`;

  constructor(private http: HttpClient) { }

  createComment (data: Comment): Observable<Response<Comment>> {
    const url = `${this.baseApiUrl}/${data.momentId}/comments` ;
    return this.http.post<Response<Comment>>(url,data);
  }
}
