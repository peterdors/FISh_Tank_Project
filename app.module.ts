import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatSelectModule, MatTabsModule, MatTableModule, MatButtonModule, MatCardModule, MatCheckboxModule, 
  MatFormFieldModule, MatInputModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';


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
    MatInputModule,
    HttpClientModule,
    MatTableModule,
  ],
  providers: [MainComponentService],
  bootstrap: [MainComponent]
})
export class AppModule { }
