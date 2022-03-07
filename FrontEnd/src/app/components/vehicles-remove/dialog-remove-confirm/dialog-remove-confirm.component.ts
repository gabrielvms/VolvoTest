import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VehicleModel } from 'src/app/models/vehicle-model';

@Component({
  selector: 'app-dialog-remove-confirm',
  templateUrl: './dialog-remove-confirm.component.html',
  styleUrls: ['./dialog-remove-confirm.component.css']
})
export class DialogRemoveConfirmComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogRemoveConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public vehicle: VehicleModel,
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

}
