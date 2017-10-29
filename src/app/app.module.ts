import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ParticipantsService } from './services/participants.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  	HttpModule,
    BrowserModule
  ],
  providers: [
  	ParticipantsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
