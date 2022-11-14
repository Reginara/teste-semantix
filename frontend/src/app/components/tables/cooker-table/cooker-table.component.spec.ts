import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookerTableComponent } from './cooker-table.component';

describe('CookerTableComponent', () => {
  let component: CookerTableComponent;
  let fixture: ComponentFixture<CookerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookerTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
