import { Injectable } from '@angular/core';

@Injectable()
export class ParticipantsService {

  constructor() { }

  setPosition(id, position): void {
  	console.log(id, position, localStorage.participants);
  	let participants = JSON.parse(localStorage.participants);

  	participants.forEach(function(participant) {
  		console.log('participant', participant);
  		if(participant.id == id) {
  			console.log('!!');
  			participant.position = position;
  		}
  	});

  	console.log('F');

  	localStorage.participants = JSON.stringify(participants);
  };

}
