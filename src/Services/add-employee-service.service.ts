import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddEmployeeServiceService {

  private url = 'http://localhost:3000/add-Employee/employee-info';

  constructor(private http: HttpClient) {}

  submitEmployee(data: any): Observable<any> {
    return this.http.post(this.url, data);
  }

}
