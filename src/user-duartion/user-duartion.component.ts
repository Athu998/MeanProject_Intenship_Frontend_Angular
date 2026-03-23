import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailySummeryService } from '../Services/daily-summery.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-duartion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-duartion.component.html',
  styleUrl: './user-duartion.component.css'
})
export class UserDuartionComponent implements OnInit, OnDestroy {

  private dailyService = inject(DailySummeryService);

  data: any[] = [];
  dailySummaryData: any[] = [];

  selectedDate: string = '';
  interval1: any;

  ngOnInit() {


    this.selectedDate = new Date().toISOString().split('T')[0];

    this.getDailySummary();


    this.interval1 = setInterval(() => {
      this.getDailySummary();
    }, 15000);

  }

  ngOnDestroy() {
    clearInterval(this.interval1);
  }

  getDailySummary() {

    this.dailyService.dailySummary().subscribe({

      next: (res: any) => {

        this.data = res;

        this.dailySummaryData = this.data.filter((user: any) => {

          const dbDate = new Date(user.login_date);

          const formatted =
            dbDate.getFullYear() +
            '-' +
            String(dbDate.getMonth() + 1).padStart(2, '0') +
            '-' +
            String(dbDate.getDate()).padStart(2, '0');

          return formatted === this.selectedDate;

        });

      },

      error: (err) => console.log(err)

    });

  }


  setToday() {

    this.selectedDate = new Date().toISOString().split('T')[0];

    this.getDailySummary();

  }
convertMinutes(mins: number) {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return `${h}h ${m}m`;
}
}
