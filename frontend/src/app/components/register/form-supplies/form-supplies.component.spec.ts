import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSuppliesComponent } from './form-supplies.component';

describe('FormSuppliesComponent', () => {
  let component: FormSuppliesComponent;
  let fixture: ComponentFixture<FormSuppliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSuppliesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSuppliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
