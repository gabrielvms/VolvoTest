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
import { DialogEditConfirmComponent } from './dialog-edit-confirm/dialog-edit-confirm.component';

@Component({
  selector: 'app-vehicles-edit',
  templateUrl: './vehicles-edit.component.html',
  styleUrls: ['./vehicles-edit.component.css'],
})
export class VehiclesEditComponent {
  editForm: FormGroup;
  matcher: MyErrorStateMatcher;

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.editForm = new FormGroup({
      chassisSeries: new FormControl('', Validators.required),
      chassisNumber: new FormControl(null, [
        Validators.required,
        IsNumberValidator.number,
      ]),
      color: new FormControl('', Validators.required),
    });
    this.matcher = new MyErrorStateMatcher();
  }

  openDialog(vehicle: VehicleModel, newColor: string): void {
    const dialogRef = this.dialog.open(DialogEditConfirmComponent, {
      width: '300px',
      data: {vehicle: vehicle, newColor: newColor},
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.apiService.editVehicle(result.vehicle.chassisId, result.newColor).subscribe(
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

  public editVehicle() {
    let chassisId: ChassisId = {
      chassisSeries: this.editForm.get('chassisSeries')?.value,
      chassisNumber: this.editForm.get('chassisNumber')?.value,
    };

    let newColor: string = this.editForm.get('color')?.value;

    this.apiService.searchVehicle(chassisId).subscribe(
      (vehicle: VehicleModel) => {
        this.openDialog(vehicle, newColor);
      },
      (err: HttpErrorResponse) => {
        this.openSnackBar(err.error);
      },
      () => console.log('finished')
    );
  }
}
