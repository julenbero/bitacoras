import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjecuciondComponent } from './ejecuciond.component';

describe('EjecuciondComponent', () => {
  let component: EjecuciondComponent;
  let fixture: ComponentFixture<EjecuciondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjecuciondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjecuciondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
