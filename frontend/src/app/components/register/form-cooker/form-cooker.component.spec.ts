import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCookerComponent } from './form-cooker.component';

describe('FormCookerComponent', () => {
  let component: FormCookerComponent;
  let fixture: ComponentFixture<FormCookerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCookerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCookerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
