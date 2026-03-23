import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeptInfoServiceService {

  constructor(private http: HttpClient) {}

  getDept() {
    return this.http.get<any[]>(
      'http://localhost:3000/dept-info/dept-info'
    );
  }

  getStateByCode(code: number) {
    return this.http.get<any>(
      `http://localhost:3000/form/state/${code}`
    );
  }
}
