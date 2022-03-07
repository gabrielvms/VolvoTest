import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { VehicleModel, ChassisId } from 'src/app/models/vehicle-model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-vehicles-table',
  templateUrl: './vehicles-table.component.html',
  styleUrls: ['./vehicles-table.component.css'],
})
export class VehiclesTableComponent implements OnInit {
  displayedColumns: string[] = [
    'series',
    'number',
    'type',
    'passengers',
    'color',
  ];
  dataSource: MatTableDataSource<VehicleModel>;

  constructor(private apiService: ApiService) {
    this.dataSource = new MatTableDataSource<VehicleModel>();
  }

  ngOnInit(): void {
    this.apiService.getVehicles().subscribe((vehicles: VehicleModel[]) => {
      this.dataSource = new MatTableDataSource<VehicleModel>(vehicles);
      console.log(this.dataSource.data);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
