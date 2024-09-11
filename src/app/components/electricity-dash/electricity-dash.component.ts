import { Component } from '@angular/core';

@Component({
  selector: 'app-electricity-dash',
  standalone: true,
  imports: [],
  templateUrl: './electricity-dash.component.html',
  styleUrl: './electricity-dash.component.css',
})
export class ElectricityDashComponent {
  temperature = 32;
  lightIntensity: number = 400;
  conductivity: number = 300;
  battery: number = 73;
}
