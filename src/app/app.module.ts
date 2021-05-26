import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirstComponent } from './first/first.component';
import 'hammerjs';
import { DietComponent } from './diet/diet.component';
import { DetailsComponent } from './details/details.component';
import { ResultComponent } from './result/result.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FirstComponent,
    DietComponent,
    DetailsComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatToolbarModule,
    MatFormFieldModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [
    FirstComponent
],
  bootstrap: [AppComponent]
})
export class AppModule { }
