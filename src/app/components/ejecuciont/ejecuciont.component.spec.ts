import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjecuciontComponent } from './ejecuciont.component';

describe('EjecuciontComponent', () => {
  let component: EjecuciontComponent;
  let fixture: ComponentFixture<EjecuciontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjecuciontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjecuciontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
