import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRemoveConfirmComponent } from './dialog-remove-confirm.component';

describe('DialogRemoveConfirmComponent', () => {
  let component: DialogRemoveConfirmComponent;
  let fixture: ComponentFixture<DialogRemoveConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogRemoveConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRemoveConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
