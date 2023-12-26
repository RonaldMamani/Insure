import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAboutMoreComponent } from './find-about-more.component';

describe('FindAboutMoreComponent', () => {
  let component: FindAboutMoreComponent;
  let fixture: ComponentFixture<FindAboutMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindAboutMoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindAboutMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
