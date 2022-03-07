import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { VehicleModel } from 'src/app/models/vehicle-model';
import { ApiService } from 'src/app/services/api.service';
import { IsNumberValidator } from 'src/app/shared/validators/is-number-validator';
import { MyErrorStateMatcher } from 'src/app/shared/validators/my-error-state-matcher';
import { ErrorMessageSnackBarComponent } from '../shared/error-message-snack-bar/error-message-snack-bar.component';
import { DialogAddConfirmComponent } from './dialog-add-confirm/dialog-add-confirm.component';


@Component({
  selector: 'app-vehicles-add',
  templateUrl: './vehicles-add.component.html',
  styleUrls: ['./vehicles-add.component.css']
})
export class VehiclesAddComponent {
  addForm: FormGroup;
  matcher: MyErrorStateMatcher;

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.addForm = new FormGroup({
      chassisSeries: new FormControl('', Validators.required),
      chassisNumber: new FormControl(null, [
        Validators.required,
        IsNumberValidator.number,
      ]),
      type: new FormControl('', Validators.required),
      numberOfPassengers: new FormControl({value: '', disabled: true}),
      color: new FormControl('', Validators.required),
    });
    this.matcher = new MyErrorStateMatcher();
  }

  openDialog(vehicle: VehicleModel): void {
    const dialogRef = this.dialog.open(DialogAddConfirmComponent, {
      width: '300px',
      data: vehicle,
    });

    dialogRef.afterClosed().subscribe((result: VehicleModel) => {
      this.apiService.addVehicle(result).subscribe(
        (vehicle: VehicleModel) => {
          console.log(vehicle);
          window.location.reload()
        },
        (err: HttpErrorResponse) => {
          console.log(err);
          this.openSnackBar(err.error);
        },
        () => console.log('finished'));
    });
  }

  openSnackBar(message: string) {
    this.snackBar.openFromComponent(ErrorMessageSnackBarComponent, {
      duration: 3000,
      data: message,
    });
  }

  addVehicle() {
    let vehicle: VehicleModel = {
      chassisId: {
        chassisSeries: this.addForm.get('chassisSeries')?.value,
        chassisNumber: this.addForm.get('chassisNumber')?.value
      },
      type: this.addForm.get('type')?.value,
      numberOfPassengers: this.addForm.get('numberOfPassengers')?.value,
      color: this.addForm.get('color')?.value
    }

    console.log(vehicle);
    this.openDialog(vehicle);
  }

  setPassenger(){
    let type: string = this.addForm.get('type')?.value;
    if(type === "Bus")
      this.addForm.get('numberOfPassengers')?.setValue(42);
    if(type === "Truck")
      this.addForm.get('numberOfPassengers')?.setValue(1);
    if(type === "Car")
      this.addForm.get('numberOfPassengers')?.setValue(4);
  }

}
