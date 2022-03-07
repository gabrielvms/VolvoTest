import { Component, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-error-message-snack-bar',
  templateUrl: './error-message-snack-bar.component.html',
  styleUrls: ['./error-message-snack-bar.component.css']
})
export class ErrorMessageSnackBarComponent {

  constructor(
    private snackRef: MatSnackBarRef<ErrorMessageSnackBarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public message: string
  ) { }
  
  dismiss(){
    this.snackRef.dismiss();
  }
  

}
