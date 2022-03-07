import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddConfirmComponent } from './dialog-add-confirm.component';

describe('DialogAddConfirmComponent', () => {
  let component: DialogAddConfirmComponent;
  let fixture: ComponentFixture<DialogAddConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
