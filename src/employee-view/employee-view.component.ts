import { Component, inject, OnInit } from '@angular/core';
import { EmpViewService } from '../Services/emp-view.service';
import { NgForOf, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UpdateEmpService } from '../Services/update-emp.service';

@Component({
  selector: 'app-employee-view',
  standalone: true,
  imports: [NgForOf, FormsModule, CommonModule],
  templateUrl: './employee-view.component.html',
  styleUrl: './employee-view.component.css'
})
export class EmployeeViewComponent implements OnInit {

  searchText: string = '';
  data: any[] = [];
  filterdUserData: any[] = [];
  selectedEmployee: any = null;
selectedDate: string = '';
  isPageLoading = true;
  isUpdating = false;

  router = inject(Router);
  employeeView = inject(EmpViewService);
  editEmp = inject(UpdateEmpService);

  ngOnInit() {
    this.fetchData();
  }

  // ================= FETCH DATA =================
  fetchData() {
    this.isPageLoading = true;

    this.employeeView.seeData().subscribe({
      next: (res: any) => {
        this.data = res;
        this.filterdUserData = this.data;
        this.isPageLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.isPageLoading = false;
      }
    });
  }

  // ================= SEARCH =================
  filterEmployees() {
    const searchData = this.searchText.toLowerCase();

    this.filterdUserData = this.data.filter(empdata =>
      empdata.name?.toLowerCase().includes(searchData) ||
      empdata.phone_number?.includes(searchData) ||
      empdata.department?.toLowerCase().includes(searchData)
    );
  }

  // ================= NAVIGATION =================
  goBack() {
    this.router.navigate(['/employee']);
  }

  // ================= EDIT =================
  editEmployee(emp: any) {
    this.selectedEmployee = {
      EmpId: emp.EmpId,
      name: emp.name,
      phone_number: emp.phone_number,
      department: emp.department
    };
  }

  // ================= UPDATE =================
 updateEmployee(form: any) {

  if (form.invalid) {
    return;
  }

  if (!this.selectedEmployee) return;

  this.isUpdating = true;

  this.editEmp.updateUser(
    this.selectedEmployee.EmpId,
    this.selectedEmployee
  ).subscribe({

    next: () => {
      alert("Employee Updated Successfully");
      this.fetchData();
      this.selectedEmployee = null;
      this.isUpdating = false;
    },

    error: (err) => {
      console.error(err);
      alert("Update failed ❌");
      this.isUpdating = false;
    }

  });
}

//Filter Data Function
filterByDate() {

  if (!this.selectedDate) {
    this.filterdUserData = this.data;
    return;
  }

  this.filterdUserData = this.data.filter(emp =>
    emp.date?.startsWith(this.selectedDate)
  );

}

}
