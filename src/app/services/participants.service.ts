import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Config } from '../config';
import { Participant } from '../types/participant';


@Injectable()
export class ParticipantsService {

	private participants: Participant[];

  constructor(private http: Http) { 
  	this.participants = localStorage.participants ? JSON.parse(localStorage.participants) : [];
  	//console.log(this.participants);
  };

  getParticipants() {
  	let result: any;

  	if(this.participants.length != 0) {
  		console.log('empty', this.participants);
  		return this.participants;
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
        
        result = participants;                                                                                                                           
        console.log('result', result); 

		   setTimeout(() => {
		     return result;
		   }, 1000);

        
      }, 
      err => {
        console.log('err')         
      });
  	}
  };  

}
