import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginServiceService } from '../../Services/login-service.service';
import { BreakAndContinueService } from '../../Services/break-and-continue-service.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  loginService = inject(LoginServiceService);
  router = inject(Router);
  breakService = inject(BreakAndContinueService);

  get isLoggedIn() {
    return this.loginService.islogedin();
  }

  get username() {
    return this.loginService.getUsername();
  }


  logout() {
    this.loginService.logout();
    this.router.navigate(['/loginEmp']);
  }


  takeBreak() {

    if (!this.isLoggedIn) return;

    this.breakService.takeBreak().subscribe({
      next: () => {

        console.log("Break started successfully");


        this.loginService.logout();

  
        this.router.navigate(['/loginEmp']);

      },
      error: (err) => {
        console.error("Break error:", err);
      }
    });
  }
}
