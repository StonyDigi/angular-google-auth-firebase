import { Component } from '@angular/core';
import { TripService } from '../trip.service';
import { Trip } from '../trip';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  actual: Trip = new Trip();
  loggedIn: boolean = false;
  constructor(public service: TripService, public auth: AuthService) {

  }

  create() {
    this.service.create(this.actual);
    this.actual = new Trip();
    alert('Sikeresen hozzáadva a táblázathoz!')
  }

  login() {
    this.auth.GoogleAuth().then(t => {
      this.actual.creatorEmail = this.auth.currentEmail();
      this.actual.creatorName = this.auth.currentUser();
      //(document.getElementById('creatoremail') as HTMLInputElement).disabled = true;
      //(document.getElementById('creatorname') as HTMLInputElement).disabled = true;
      this.loggedIn = true;
    });
  }

  logout() {
    this.auth.logout().then(t => {
      this.actual.creatorEmail = '';
      this.actual.creatorName = '';
      this.loggedIn = false;
    });
  }
}
