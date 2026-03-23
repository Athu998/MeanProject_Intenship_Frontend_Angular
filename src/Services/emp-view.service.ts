import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmpViewService {

  constructor(private http:HttpClient,private router:Router) { }
  seeData(){
    const url='http://localhost:3000/employeeView'
    return this.http.get(url)
  }
}
