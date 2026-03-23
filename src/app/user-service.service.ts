import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private service ='http://localhost:3000/form/submit-form'
  constructor(private http:HttpClient) { }
  addUser(data:any){
    return this.http.post(this.service,data)
  }
}
