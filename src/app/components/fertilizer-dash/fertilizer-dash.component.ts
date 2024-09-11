import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fertilizer-dash',
  standalone: true,
  imports: [NgClass],
  templateUrl: './fertilizer-dash.component.html',
  styleUrl: './fertilizer-dash.component.css',
})
export class FertilizerDashComponent {
  soilMoisture = 15;
  phLevel = 6.5;
  humidity = 60;
  isFertilizerOn = true;

  toggleFertilizer() {
    this.isFertilizerOn = !this.isFertilizerOn;
  }
}
