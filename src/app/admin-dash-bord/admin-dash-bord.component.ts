import { Component, inject, OnInit } from '@angular/core';
import { AdminAccessService } from '../../Services/admin-access.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './admin-dash-bord.component.html',
  styleUrl: './admin-dash-bord.component.css',
  imports:[CommonModule, FormsModule]
})

export class AdminDashboardComponent implements OnInit {

  adminAccess = inject(AdminAccessService);
  http = inject(HttpClient)

  users:any[] = [];
  selectedDate:any;

  ngOnInit(){
    this.loadUsers();
  }

  loadUsers(){

    this.adminAccess.getUsers().subscribe({

      next:(res:any)=>{
        this.users = res;
      },

      error:(err)=>{
        console.log(err);
      }

    });

  }
allowLogin(empId:any){

this.adminAccess.allowLogin(empId).subscribe({

next:(res:any)=>{

const user = this.users.find((u:any)=>u.employee_id === empId);

if(user){
user.admin_override = 1;
}

},

error:(err)=>{
console.log(err);
}

});

}

  filterByDate(){

    this.http.get(`http://localhost:3000/api/users?date=${this.selectedDate}`)
    .subscribe((res:any)=>{
      this.users = res;
    })

  }

  setToday(){

    const today = new Date().toISOString().split('T')[0];
    this.selectedDate = today;

    this.filterByDate();

  }

}
