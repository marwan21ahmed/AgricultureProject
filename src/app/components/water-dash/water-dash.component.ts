import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-water-dash',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './water-dash.component.html',
  styleUrl: './water-dash.component.css',
})
export class WaterDashComponent {
  isPumpOn = true;
  flowRate = 3;
  humidity = 64;
  temperature = 23;
  rainFall = 0.5;
  soilMoisture = 43;
  flowRateControl = new FormControl(3);

  togglePump() {
    this.isPumpOn = !this.isPumpOn;
  }

  setFlowRate(rate: number) {
    if (rate < 0) {
      rate = 0;
    } else if (rate > 100) {
      rate = 100;
    } else {
      this.flowRate = rate;
    }
  }
}
