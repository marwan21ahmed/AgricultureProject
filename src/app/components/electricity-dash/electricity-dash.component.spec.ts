import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricityDashComponent } from './electricity-dash.component';

describe('ElectricityDashComponent', () => {
  let component: ElectricityDashComponent;
  let fixture: ComponentFixture<ElectricityDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectricityDashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElectricityDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
