import { Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProjectComponent } from './project/project.component';
import { HomeComponent } from './home/home.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';

export const routes: Routes = [
  {
    path:'customer',
    component:CustomerComponent
  },
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'employee',
    component:EmployeeComponent
  },
  {
    path:'project',
    component:ProjectComponent
  },
  {
    path:'addCustomer',
    component:AddCustomerComponent
  },
  {
    path:"",
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'Home',
    component:HomeComponent
  }
];
