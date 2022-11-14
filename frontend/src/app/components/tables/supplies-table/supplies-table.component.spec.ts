import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliesTableComponent } from './supplies-table.component';

describe('SuppliesTableComponent', () => {
  let component: SuppliesTableComponent;
  let fixture: ComponentFixture<SuppliesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuppliesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuppliesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
