import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {formCompleto} from '../models/formularioCompleto';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CompletoService {
  private informeCompletoUrl = 'http://localhost:3308/api/completo';  // URL to web api

  constructor( private http: HttpClient) { }
  

  getInformesCompletos(): Observable<formCompleto[]> {
    return this.http.get<formCompleto[]>(this.informeCompletoUrl);

  }
  getInformeCompleto(id: string): Observable<formCompleto> {
    const url = `${this.informeCompletoUrl}/${id}`;
    return this.http.get<formCompleto>(url);
  }

  addInformeCompleto (informeCompleto: formCompleto): Observable<formCompleto> {
    return this.http.post<formCompleto>(this.informeCompletoUrl, informeCompleto, httpOptions);
  }

  deleteInformeCompleto (informeCompleto: formCompleto | string): Observable<formCompleto> {
    const id = typeof informeCompleto === 'string' ? informeCompleto : informeCompleto.id;
    const url = `${this.informeCompletoUrl}/${id}`;

    return this.http.delete<formCompleto>(url, httpOptions);
  }

  updateInformeCompleto (informeCompleto: formCompleto): Observable<any> {
    return this.http.put(this.informeCompletoUrl, informeCompleto, httpOptions);
  }
}
