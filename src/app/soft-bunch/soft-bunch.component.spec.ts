import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftBunchComponent } from './soft-bunch.component';

describe('SoftBunchComponent', () => {
  let component: SoftBunchComponent;
  let fixture: ComponentFixture<SoftBunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftBunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftBunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
