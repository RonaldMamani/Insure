import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefiesPlansComponent } from './benefies-plans.component';

describe('BenefiesPlansComponent', () => {
  let component: BenefiesPlansComponent;
  let fixture: ComponentFixture<BenefiesPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BenefiesPlansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BenefiesPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
