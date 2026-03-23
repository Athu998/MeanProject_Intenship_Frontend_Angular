import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllCustomersService {

  constructor(private http:HttpClient) { }
  sellallUsers(){
   return this.http.get<any[]>('http://localhost:3000/allCustomer');

  }
}
