//angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {
  MatSelectModule, MatSelect, MatSelectTrigger, MatOption,
  MatDatepicker, MatDatepickerModule, MatNativeDateModule,
  MatTabsModule, MatButtonModule, MatCardModule, MatCheckboxModule,
  MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatTable, MatTableModule, MatRadioButton, MatRadioGroup, MatRadioModule, MatPaginator, MatPaginatorModule, MatExpansionModule
} from '@angular/material';
import { DateAdapter, MAT_DATE_FORMATS, MatDateFormats, ThemePalette } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './app.component';
import { MainComponentService } from './app.component.service';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CommonModule,
    MatSelectModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CommonModule,
    MatSelectModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [MainComponentService],
  bootstrap: [MainComponent]
})
export class AppModule { }
