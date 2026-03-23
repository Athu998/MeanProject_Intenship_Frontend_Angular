import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AdminLoginServiceService } from '../../Services/admin-login-service.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  isAdmin:boolean=false

  router = inject(Router);
  adminLoginn = inject(AdminLoginServiceService);
  fb = inject(FormBuilder);

  adminForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    password: ['', Validators.required]
  });

  loginAdmin() {

    if(this.adminForm.invalid){
      alert("Please fill all fields");
      return;
    }

    this.adminLoginn.adminLogin(this.adminForm.value).subscribe({

      next: (res:any) => {
        localStorage.setItem("adminToken", res.token);
        alert('Admin Login done Welcome');
        this.router.navigate(['/adminDashBord']);
        this.isAdmin=true
      },

      error: (err) => {
        alert("Invalid Admin Credentials");
        this.isAdmin=false
      }

    });

  }

}
