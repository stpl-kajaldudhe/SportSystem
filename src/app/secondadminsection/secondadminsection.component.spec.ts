import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondadminsectionComponent } from './secondadminsection.component';

describe('SecondadminsectionComponent', () => {
  let component: SecondadminsectionComponent;
  let fixture: ComponentFixture<SecondadminsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondadminsectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondadminsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
