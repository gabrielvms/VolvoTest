import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ChassisId, VehicleModel } from 'src/app/models/vehicle-model';
import { ApiService } from 'src/app/services/api.service';
import { IsNumberValidator } from 'src/app/shared/validators/is-number-validator';
import { MyErrorStateMatcher } from 'src/app/shared/validators/my-error-state-matcher';
import { ErrorMessageSnackBarComponent } from '../shared/error-message-snack-bar/error-message-snack-bar.component';
import { DialogRemoveConfirmComponent } from './dialog-remove-confirm/dialog-remove-confirm.component';

@Component({
  selector: 'app-vehicles-remove',
  templateUrl: './vehicles-remove.component.html',
  styleUrls: ['./vehicles-remove.component.css'],
})
export class VehiclesRemoveComponent {
  removeForm: FormGroup;
  matcher: MyErrorStateMatcher;

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.removeForm = new FormGroup({
      chassisSeries: new FormControl('', Validators.required),
      chassisNumber: new FormControl(null, [
        Validators.required,
        IsNumberValidator.number,
      ]),
    });
    this.matcher = new MyErrorStateMatcher();
  }

  openDialog(vehicle: VehicleModel): void {
    const dialogRef = this.dialog.open(DialogRemoveConfirmComponent, {
      width: '300px',
      data: vehicle,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      this.apiService.removeVehicle(result.chassisId).subscribe(
        (okMessage: any) => {
          console.log(okMessage);
          window.location.reload()
        });
    });
  }

  openSnackBar(message: string) {
    this.snackBar.openFromComponent(ErrorMessageSnackBarComponent, {
      duration: 3000,
      data: message,
    });
  }

  public removeVehicle() {
    let chassisId: ChassisId = this.removeForm.value;

    this.apiService.searchVehicle(chassisId).subscribe(
      (vehicle: VehicleModel) => {
        this.openDialog(vehicle);
      },
      (err: HttpErrorResponse) => {
        this.openSnackBar(err.error);
      },
      () => console.log('finished')
    );
  }
}
