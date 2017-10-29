import { Component, OnInit } from '@angular/core';

import { ParticipantsService } from './services/participants.service';
import { Participant } from './types/participant';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	private participants: Participant[] = [];
  
  constructor(private participantsService: ParticipantsService) { };

  ngOnInit() {
  	this.getParticipants();
  };

  private getParticipants(): void {
    this.participantsService.getParticipants().subscribe(
      data => {   
        //console.log(data);  
        let participantsRaw = JSON.parse(data._body);
        let participants: any[] = [];

        for(var prop in participantsRaw) {
          if (!participantsRaw.hasOwnProperty(prop)) continue;
          participants.push(participantsRaw[prop]);
        }
        
        this.participants = participants;                                                                                                                           
        console.log('participants', this.participants); 
      }, 
      err => {
        console.log('err')         
      });    
  };  

}
