import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LoginServiceService } from '../../Services/login-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  loginService = inject(LoginServiceService)

  loading = true;
  username: string = '';
  isLog:any;

  ngOnInit(){

    this.username = this.loginService.getUsername();
    this.isLog=this.loginService.islogedin();
    setTimeout(() => {
      this.loading = false;
    }, 1200);
  }

}
