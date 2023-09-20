import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Foglalas } from '../model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  postUjFoglalas(foglalas: Foglalas){
    return this.http.post<any>('http://localhost:3000/foglalasok', foglalas);
  }

  getAllFoglalas(){
   return this.http.get<Foglalas[]>('http://localhost:3000/foglalasok');
  }

  getKat(){
    return this.http.get<any>('http://localhost:3000/kategoriak/');
   }
}
