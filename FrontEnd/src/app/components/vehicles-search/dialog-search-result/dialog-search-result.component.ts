import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VehicleModel } from 'src/app/models/vehicle-model';

@Component({
  selector: 'app-dialog-search-result',
  templateUrl: './dialog-search-result.component.html',
  styleUrls: ['./dialog-search-result.component.css']
})
export class DialogSearchResultComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogSearchResultComponent>,
    @Inject(MAT_DIALOG_DATA) public vehicle: VehicleModel,
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

}
