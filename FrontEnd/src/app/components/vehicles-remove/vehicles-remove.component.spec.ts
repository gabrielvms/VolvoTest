import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesRemoveComponent } from './vehicles-remove.component';

describe('VehiclesRemoveComponent', () => {
  let component: VehiclesRemoveComponent;
  let fixture: ComponentFixture<VehiclesRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclesRemoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
