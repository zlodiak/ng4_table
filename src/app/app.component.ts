import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Config } from './config';
import { ParticipantsService } from './services/participants.service';
import { Participant } from './types/participant';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private participants: Participant[] = [];
  private GENDERS: Object = {
    0: 'female',
    1: 'male',
    2: 'android'
  };
  
  constructor(private participantsService: ParticipantsService,
              private http: Http) 
  { 
    this.participants = localStorage.participants ? JSON.parse(localStorage.participants) : [];
    //console.log(this.participants);
  };

  ngOnInit() {
  	this.getParticipants();
  };

  private getParticipants(): void {
    let result: any;

    if(this.participants.length != 0) {
      console.log('empty', this.participants);
    } else {
      //console.log('full');
      this.http.get(Config.host + 'assets/json/participants.json').subscribe(
      data => {   
        //console.log(data);  
        let participantsRaw = JSON.parse(data['_body']);
        let participants: any[] = [];

        for(var prop in participantsRaw) {
          if (!participantsRaw.hasOwnProperty(prop)) continue;
          participants.push(participantsRaw[prop]);
        }
        
        this.participants = participants;                                                                                                                           
        console.log('this.participants', this.participants); 
      }, 
      err => {
        console.log('err')         
      });
    } 
  };  

}
