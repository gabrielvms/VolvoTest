import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChassisId, VehicleModel } from 'src/app/models/vehicle-model';
import { ApiService } from 'src/app/services/api.service';
import { IsNumberValidator } from 'src/app/shared/validators/is-number-validator';
import { MyErrorStateMatcher } from 'src/app/shared/validators/my-error-state-matcher';
import { MatDialog } from '@angular/material/dialog';
import { DialogSearchResultComponent } from './dialog-search-result/dialog-search-result.component';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorMessageSnackBarComponent } from '../shared/error-message-snack-bar/error-message-snack-bar.component';

@Component({
  selector: 'app-vehicles-search',
  templateUrl: './vehicles-search.component.html',
  styleUrls: ['./vehicles-search.component.css'],
})
export class VehiclesSearchComponent {

  searchForm: FormGroup;
  matcher: MyErrorStateMatcher;
  
  constructor(private apiService: ApiService, private dialog: MatDialog, private snackBar: MatSnackBar) {
    this.searchForm = new FormGroup({
      chassisSeries: new FormControl('', Validators.required),
      chassisNumber: new FormControl(null, [
        Validators.required,
        IsNumberValidator.number,
      ]),
    });

    this.matcher = new MyErrorStateMatcher();
  }

  openDialog(vehicle: VehicleModel): void {
    const dialogRef = this.dialog.open(DialogSearchResultComponent, {
      width: '300px',
      data: vehicle,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  openSnackBar(message: string){
    this.snackBar.openFromComponent(ErrorMessageSnackBarComponent, {
      duration:  3000, data: message
    });
  }

  public searchVehicle() {
    let chassisId: ChassisId = this.searchForm.value;

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
