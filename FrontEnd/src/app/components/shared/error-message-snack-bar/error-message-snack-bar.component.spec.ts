import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMessageSnackBarComponent } from './error-message-snack-bar.component';

describe('ErrorMessageSnackBarComponent', () => {
  let component: ErrorMessageSnackBarComponent;
  let fixture: ComponentFixture<ErrorMessageSnackBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorMessageSnackBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorMessageSnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
