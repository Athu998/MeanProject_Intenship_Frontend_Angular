import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private url = "http://localhost:3000/user-login";
  private logoutTimer: any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  getlogin(data: any) {
    return this.http.post(this.url, data);
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
    this.autoLogout();
  }

  getToken() {
    return localStorage.getItem('token');
  }

  islogedin() {
    return !!localStorage.getItem('token');
  }

logout() {

  const token = this.getToken();

  this.http.post(
    "http://localhost:3000/logout",
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  ).subscribe({
    next: () => {
      console.log("Logout success");
    },
    error: (err) => {
      console.log("Logout error:", err);
    },
    complete: () => {

      localStorage.clear();
      clearTimeout(this.logoutTimer);
      this.router.navigate(['/loginEmp']);
    }
  });
}

  saveUsername(username: string) {
    localStorage.setItem('username', username);
  }

  getUsername() {
    return localStorage.getItem('username') || '';
  }


  autoLogout() {
    this.logoutTimer = setTimeout(() => {
      this.logout();
    },  60*60*1000);
  }
}
