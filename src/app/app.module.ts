import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatButtonModule,
          MatTableModule } from '@angular/material';


import { AppComponent } from './app.component';
import { ParticipantsService } from './services/participants.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatTableModule,
    MatButtonModule,
    BrowserAnimationsModule,
  	HttpModule,
    BrowserModule
  ],
  providers: [
  	ParticipantsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
