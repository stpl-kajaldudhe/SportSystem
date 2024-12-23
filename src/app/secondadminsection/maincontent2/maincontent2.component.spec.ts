import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Maincontent2Component } from './maincontent2.component';

describe('Maincontent2Component', () => {
  let component: Maincontent2Component;
  let fixture: ComponentFixture<Maincontent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Maincontent2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Maincontent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
