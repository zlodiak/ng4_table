import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Config } from '../config';


@Injectable()
export class ParticipantsService {

  constructor(private http: Http) { };

  getParticipants(): Observable<any> {
  	return this.http.get(Config.host + 'assets/json/participants.json');
  };  

}
