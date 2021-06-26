import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  private subject = new Subject<any>();

  constructor(private http: HttpClient) { }

  configUrl = 'http://localhost:3000/';

  getCategories() {
    return this.http.get<any>(this.configUrl + 'categories');
  }

  getProducts() {
    return this.http.get<any>(this.configUrl + 'products');
  }
  sendSearchText(message: string) {
    this.subject.next(message);
  }

  clearMessages() {
    this.subject.next();
  }

  onSearch(): Observable<any> {
    return this.subject.asObservable();
  }
}
