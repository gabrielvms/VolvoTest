import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChassisId, VehicleModel } from '../models/vehicle-model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl: string = 'https://volvotestapi.azurewebsites.net/api/Vehicles';
  constructor(private http: HttpClient) {}

  public getVehicles(): Observable<VehicleModel[]> {
    return this.http.get<VehicleModel[]>(this.baseUrl + '/ListVehicles');
  }

  public searchVehicle(chassisId: ChassisId): Observable<VehicleModel> {
    let queryParams = {
      ChassisSeries: chassisId.chassisSeries,
      ChassisNumber: chassisId.chassisNumber,
    };
    return this.http.get<VehicleModel>(this.baseUrl + '/SearchVehicle', {params: queryParams});
  }
  
  public addVehicle(vehicle: VehicleModel): Observable<VehicleModel> {
    return this.http.post<VehicleModel>(this.baseUrl + '/AddVehicle', vehicle);
  }

  public editVehicle(chassisId: ChassisId, color: string): Observable<any> {
    let queryParams = {
      newColor: color
    };
    return this.http.put<any>(this.baseUrl + '/UpdateVehicle', chassisId, {params: queryParams});
  }

  public removeVehicle(chassisId: ChassisId): Observable<any> {
    return this.http.delete<any>(this.baseUrl + '/DeleteVehicle', {body: chassisId});
  }
}
