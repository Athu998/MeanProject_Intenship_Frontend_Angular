import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';   // ✅ THIS WAS MISSING

@Injectable({
  providedIn: 'root'
})
export class ViewCustomerService {

  constructor(private http: HttpClient) {}

  seeCustomer(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/customerView');
  }
}
