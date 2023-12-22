import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefieComponent } from './benefie.component';

describe('BenefieComponent', () => {
  let component: BenefieComponent;
  let fixture: ComponentFixture<BenefieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BenefieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BenefieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
