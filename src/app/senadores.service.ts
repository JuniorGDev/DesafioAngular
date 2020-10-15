import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Senadores {
  id: string,
  nomeSenador: string
}

const urlBase = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class SenadoresService {

  constructor(private http: HttpClient) { }

  listSenadores() {
    this.http.get<Senadores[]>(`${urlBase}/senadores?_sort=name`);
  }
}
