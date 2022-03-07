import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditConfirmComponent } from './dialog-edit-confirm.component';

describe('DialogEditConfirmComponent', () => {
  let component: DialogEditConfirmComponent;
  let fixture: ComponentFixture<DialogEditConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
