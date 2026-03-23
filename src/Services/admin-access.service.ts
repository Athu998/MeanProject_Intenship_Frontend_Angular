import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AdminAccessService {

  constructor(private http:HttpClient){}

  baseUrl = "http://localhost:3000/admin-chnage-access";

  allowLogin(empId:any){
    return this.http.post(`${this.baseUrl}/${empId}`,{});
  }

  getUsers(){
    return this.http.get(`${this.baseUrl}/users`);
  }

}
