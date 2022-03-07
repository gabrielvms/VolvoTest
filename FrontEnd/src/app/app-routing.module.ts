import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiclesAddComponent } from './components/vehicles-add/vehicles-add.component';
import { VehiclesEditComponent } from './components/vehicles-edit/vehicles-edit.component';
import { VehiclesRemoveComponent } from './components/vehicles-remove/vehicles-remove.component';
import { VehiclesSearchComponent } from './components/vehicles-search/vehicles-search.component';
import { VehiclesTableComponent } from './components/vehicles-table/vehicles-table.component';

const routes: Routes = [
  { path: 'All-Vehicles', component: VehiclesTableComponent },
  { path: 'Search', component: VehiclesSearchComponent },
  { path: 'Edit', component: VehiclesEditComponent },
  { path: 'Add', component: VehiclesAddComponent },
  { path: 'Remove', component: VehiclesRemoveComponent },
  { path: 'search', redirectTo: 'Search' },
  { path: 'edit', redirectTo: 'Edit' },
  { path: 'add', redirectTo: 'Add' },
  { path: 'remove', redirectTo: 'Remove' },
  { path: '**', redirectTo: 'All-Vehicles' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
