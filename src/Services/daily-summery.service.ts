import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DailySummeryService {

  constructor(private http : HttpClient) { }
  dailySummary(){
   return  this.http.get('http://localhost:3000/daily-summary')
  }
}
