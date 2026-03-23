import { NgIf, NgForOf, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { DeptInfoServiceService } from '../../Services/dept-info-service.service';
import { AddEmployeeServiceService } from '../../Services/add-employee-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgForOf, CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  router = inject(Router);
  depInfo = inject(DeptInfoServiceService);
  submitUser = inject(AddEmployeeServiceService);

  data: any[] = [];

  employeeInfo: FormGroup = new FormGroup({
    EmpId: new FormControl('101', Validators.required),
    name: new FormControl('Jon', Validators.required),
    phone_number: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[6-9]\d{9}$/)
    ]),
    designation: new FormControl('', Validators.required),
    department: new FormControl('', Validators.required),
    initials: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('^[A-Z](?=.*[0-9])(?=.*[!@#$%^&*]).{7,}$')
    ]),
    username: new FormControl('', Validators.required)
  });

  ngOnInit() {
    this.depInfo.getDept().subscribe((req: any) => {
      this.data = req;
      if (!this.data) {
        console.log("API Error");
      }
    });
  }

  submitForm() {

    if (this.employeeInfo.invalid) {
      this.employeeInfo.markAllAsTouched();
      return;
    }

    this.submitUser.submitEmployee(this.employeeInfo.value).subscribe({
      next: (res) => {
        alert('Employee Data stored!!');
        this.employeeInfo.reset();
        this.router.navigate(['/customer']);
      },
      error: (err) => {
        console.error(err);
        alert('Error while submitting data');
      }
    });
  }

  seeAllEmployee() {
    this.router.navigate(['/employee-view']);
  }
}
