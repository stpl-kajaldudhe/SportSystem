import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticepageComponent } from './practicepage.component';

describe('PracticepageComponent', () => {
  let component: PracticepageComponent;
  let fixture: ComponentFixture<PracticepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
