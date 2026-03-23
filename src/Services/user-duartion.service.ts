import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDuartionService {

  constructor(private http : HttpClient) { }
  //endPoint api for all logedin users data
  url="http://localhost:3000/userDuration"
//endPoint api for all active users in system
  activeUsersurl="http://localhost:3000/active-users"

  userDuration(){
   return this.http.get(this.url)
  }
  //New Url to get Active or logedin Users
  activeUsers(){
    return this.http.get(this.activeUsersurl)

  }
}
