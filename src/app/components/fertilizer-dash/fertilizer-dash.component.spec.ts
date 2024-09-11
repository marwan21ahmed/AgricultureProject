import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FertilizerDashComponent } from './fertilizer-dash.component';

describe('FertilizerDashComponent', () => {
  let component: FertilizerDashComponent;
  let fixture: ComponentFixture<FertilizerDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FertilizerDashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FertilizerDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
