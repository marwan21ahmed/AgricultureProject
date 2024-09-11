import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterDashComponent } from './water-dash.component';

describe('WaterDashComponent', () => {
  let component: WaterDashComponent;
  let fixture: ComponentFixture<WaterDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaterDashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WaterDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
