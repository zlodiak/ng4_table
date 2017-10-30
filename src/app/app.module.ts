import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatButtonModule,
          MatTableModule,
          MatDialogModule,
          MatInputModule } from '@angular/material';

import { AppComponent, DialogOverviewExampleDialog } from './app.component';
import { PositionComponent } from './modals/position/position.component';
import { ParticipantsService } from './services/participants.service';


@NgModule({
  declarations: [
    DialogOverviewExampleDialog,
    AppComponent,
    PositionComponent
  ],
  imports: [
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatButtonModule,
    BrowserAnimationsModule,
  	HttpModule,
    BrowserModule
  ],
  providers: [
    ParticipantsService
  ],
  entryComponents: [
    DialogOverviewExampleDialog,
    PositionComponent
  ],   
  bootstrap: [AppComponent]
})
export class AppModule { }
