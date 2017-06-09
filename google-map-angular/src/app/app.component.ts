import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  title: string = 'DayTripper | Intégration API Google Map avec Angular2';
  lat: number = 45.449651;
  lng: number = 4.386286;
}