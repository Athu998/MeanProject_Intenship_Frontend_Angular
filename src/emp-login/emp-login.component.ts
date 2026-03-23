import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginServiceService } from '../Services/login-service.service';
import { Router } from '@angular/router';
import { IdleService } from '../Services/idle.service';
import { BreakAndContinueService } from '../Services/break-and-continue-service.service';
@Component({
  selector: 'app-emp-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './emp-login.component.html',
  styleUrl: './emp-login.component.css'
})
export class EmpLoginComponent {

  loginService = inject(LoginServiceService);
  router = inject(Router);
  idel = inject(IdleService)
  breakService = inject(BreakAndContinueService);
  loginData = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),

  });

  loginDataa() {

  if (this.loginData.invalid) return;

  const formValue = this.loginData.value;

  this.loginService.getlogin(formValue).subscribe({
    next: (res: any) => {

      alert('Login Successful');

      this.loginService.saveToken(res.token);
      this.loginService.saveUsername(res.username);

      // ✅ CALL CONTINUE FROM CORRECT SERVICE
      this.breakService.continueWork().subscribe({
        next: () => {
          console.log("✅ Work resumed");
        },
        error: () => {
          console.log("ℹ Normal login (not on break)");
        }
      });

      this.idel.startWatching();
      this.router.navigate(['/addCustomer']);
    },

    error: (err) => {
      alert(err.error.message);
    }
  });
}
}
