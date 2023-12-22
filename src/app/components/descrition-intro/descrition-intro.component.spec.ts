import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescritionIntroComponent } from './descrition-intro.component';

describe('DescritionIntroComponent', () => {
  let component: DescritionIntroComponent;
  let fixture: ComponentFixture<DescritionIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescritionIntroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescritionIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
