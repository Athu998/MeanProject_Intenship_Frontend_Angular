import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginServiceService {

  constructor(private http : HttpClient) { }
   url:any ='http://localhost:3000/admin-login'

   adminLogin(data:any){
   return this.http.post(this.url,data)
   }

    isAdminLoggedIn(){
    return localStorage.getItem("adminToken") !== null;
  }
}
