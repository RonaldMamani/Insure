import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroHumanComponent } from './intro-human.component';

describe('IntroHumanComponent', () => {
  let component: IntroHumanComponent;
  let fixture: ComponentFixture<IntroHumanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroHumanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntroHumanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
