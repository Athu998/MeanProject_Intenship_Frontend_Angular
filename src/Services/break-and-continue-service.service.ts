import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreakAndContinueService {

  constructor(private http: HttpClient) {}

  private getAuthHeaders() {
    const token = localStorage.getItem('token');
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    };
  }

  takeBreak() {
    return this.http.post(
      'http://localhost:3000/break',
      {},
      this.getAuthHeaders()
    );
  }

  continueWork() {
    return this.http.post(
      'http://localhost:3000/continue',
      {},
      this.getAuthHeaders()
    );
  }
}
