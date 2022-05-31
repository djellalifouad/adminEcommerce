import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private http: HttpClient) {}
  list(): Observable<any[]> {
    return this.http.get('http://localhost:3003/order') as Observable<any[]>;
  }
}
