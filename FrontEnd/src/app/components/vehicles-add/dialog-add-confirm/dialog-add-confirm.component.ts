import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VehicleModel } from 'src/app/models/vehicle-model';

@Component({
  selector: 'app-dialog-add-confirm',
  templateUrl: './dialog-add-confirm.component.html',
  styleUrls: ['./dialog-add-confirm.component.css']
})
export class DialogAddConfirmComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogAddConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public vehicle: VehicleModel,
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

}
