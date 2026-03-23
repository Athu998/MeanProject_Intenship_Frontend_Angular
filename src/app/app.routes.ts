import { Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProjectComponent } from './project/project.component';
import { HomeComponent } from './home/home.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
//import { CustomerPreviewComponent } from './customer-preview/customer-preview.component';
import { EmpLoginComponent } from '../emp-login/emp-login.component';
import { EmployeeViewComponent } from '../employee-view/employee-view.component';
import { authgurdGuard } from './services/authgurd.guard';
import { UserDuartionComponent } from '../user-duartion/user-duartion.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

import { adminAuthGuard } from './Guards/admin-auth.guard';
import { AdminDashboardComponent } from './admin-dash-bord/admin-dash-bord.component';

export const routes: Routes = [

  { path:'', component:HomeComponent },

  { path:'Home', component:HomeComponent },

  { path:'loginEmp', component:EmpLoginComponent },

  { path:'customer', component:CustomerComponent },

  { path:'employee', component:EmployeeComponent , canActivate:[authgurdGuard]},

  { path:'project', component:ProjectComponent },

  {
    path:'addCustomer',
    component:AddCustomerComponent,
    canActivate:[authgurdGuard]
  },

  // {
  //   path:'customer-preview',
  //   component:CustomerPreviewComponent
  // },

  {
    path:'employee-view',
    component:EmployeeViewComponent,
    canActivate:[authgurdGuard]
  },
  // {
  //   path:'customer-preview',
  //   component:CustomerPreviewComponent
  // }
  {
    path:'employee-duration',
    component:UserDuartionComponent
  },
  {
    path:'admin-login',
    component:AdminLoginComponent,
    //canActivate:[authgurdGuard]
  },
  {
    path:'adminDashBord',
    component:AdminDashboardComponent,
    canActivate:[adminAuthGuard]
  }
];
