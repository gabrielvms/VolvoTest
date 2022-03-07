import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-edit-confirm',
  templateUrl: './dialog-edit-confirm.component.html',
  styleUrls: ['./dialog-edit-confirm.component.css']
})
export class DialogEditConfirmComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogEditConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

}
