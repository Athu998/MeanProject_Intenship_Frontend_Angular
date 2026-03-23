import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateCustService {

  constructor(private http: HttpClient) {}

updateCustomer(id: number, data: any) {
  return this.http.put(
    `http://localhost:3000/update-customer/${id}`,
    data
  );
}
}
