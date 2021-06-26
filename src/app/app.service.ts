import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  configUrl = 'http://localhost:3000/';

  getCategories() {
    return this.http.get<any>(this.configUrl+'categories');
  }
}
