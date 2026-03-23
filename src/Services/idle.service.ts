import { Injectable, inject, NgZone } from '@angular/core';
import { BreakAndContinueService } from './break-and-continue-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IdleService {

  private breakService = inject(BreakAndContinueService);
  private router = inject(Router);
  private zone = inject(NgZone);

  private timeout: any = null;
  private idleTime = 15 * 1000;

  private resetTimerBound = this.resetTimer.bind(this);
  private events = ['mousemove', 'keydown', 'click', 'scroll'];

  startWatching() {

    const token = localStorage.getItem('token');
    if (!token) return;

    console.log("Idle watching started");

    this.stopWatching();
    this.resetTimer();

    this.events.forEach(event => {
      window.addEventListener(event, this.resetTimerBound);
    });
  }


  resetTimer() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    this.timeout = setTimeout(() => {
      this.handleIdle();
    }, this.idleTime);
  }

  handleIdle() {

  const token = localStorage.getItem('token');
  if (!token) return;

  this.breakService.takeBreak().subscribe({
    next: () => {

      this.stopWatching();

      this.zone.run(() => {
        this.router.navigateByUrl('/loginEmp', { replaceUrl: true });
      });
    },
    error: () => {

      localStorage.removeItem('token');
      this.stopWatching();

      this.zone.run(() => {
        this.router.navigateByUrl('/loginEmp', { replaceUrl: true });
      });
    }
  });
}
  stopWatching() {

    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }

    this.events.forEach(event => {
      window.removeEventListener(event, this.resetTimerBound);
    });

    console.log("Idle watching stopped");
  }
}
