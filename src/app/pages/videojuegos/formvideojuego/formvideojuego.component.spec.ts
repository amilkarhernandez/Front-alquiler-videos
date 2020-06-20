import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormvideojuegoComponent } from './formvideojuego.component';

describe('FormvideojuegoComponent', () => {
  let component: FormvideojuegoComponent;
  let fixture: ComponentFixture<FormvideojuegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormvideojuegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormvideojuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
