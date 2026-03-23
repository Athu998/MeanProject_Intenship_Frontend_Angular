import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateEmpService {

  constructor(private http: HttpClient) {}

  updateUser(id: number, data: any) {
    return this.http.put(
      `http://localhost:3000/update-Employee/${id}`,
      data
    );
  }
}
