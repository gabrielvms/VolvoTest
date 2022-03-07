import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { VehiclesTableComponent } from './components/vehicles-table/vehicles-table.component';
import { VehiclesAddComponent } from './components/vehicles-add/vehicles-add.component';
import { VehiclesRemoveComponent } from './components/vehicles-remove/vehicles-remove.component';
import { VehiclesSearchComponent } from './components/vehicles-search/vehicles-search.component';
import { VehiclesEditComponent } from './components/vehicles-edit/vehicles-edit.component';
import { DialogSearchResultComponent } from './components/vehicles-search/dialog-search-result/dialog-search-result.component';
import { ErrorMessageSnackBarComponent } from './components/shared/error-message-snack-bar/error-message-snack-bar.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DialogRemoveConfirmComponent } from './components/vehicles-remove/dialog-remove-confirm/dialog-remove-confirm.component';
import { DialogEditConfirmComponent } from './components/vehicles-edit/dialog-edit-confirm/dialog-edit-confirm.component';
import { DialogAddConfirmComponent } from './components/vehicles-add/dialog-add-confirm/dialog-add-confirm.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VehiclesTableComponent,
    VehiclesAddComponent,
    VehiclesRemoveComponent,
    VehiclesSearchComponent,
    VehiclesEditComponent,
    DialogSearchResultComponent,
    ErrorMessageSnackBarComponent,
    DialogRemoveConfirmComponent,
    DialogEditConfirmComponent,
    DialogAddConfirmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatSelectModule,
    MatDividerModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
