import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrocineSoftButchComponent } from './patrocine-soft-butch.component';

describe('PatrocineSoftButchComponent', () => {
  let component: PatrocineSoftButchComponent;
  let fixture: ComponentFixture<PatrocineSoftButchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatrocineSoftButchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatrocineSoftButchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
