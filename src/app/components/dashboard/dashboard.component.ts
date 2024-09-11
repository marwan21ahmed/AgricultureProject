import { Component } from '@angular/core';
import { WaterDashComponent } from '../water-dash/water-dash.component';
import { FertilizerDashComponent } from '../fertilizer-dash/fertilizer-dash.component';
import { ElectricityDashComponent } from '../electricity-dash/electricity-dash.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    WaterDashComponent,
    FertilizerDashComponent,
    ElectricityDashComponent,
    NgClass
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  currentTab = 'water';

  switchTab(tab: string) {
    this.currentTab = tab;
  }
}
