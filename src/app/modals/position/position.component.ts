import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ParticipantsService } from '../../services/participants.service';
import { AppComponent } from '../../app.component';


@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss'],
  providers: [AppComponent]
})
export class PositionComponent implements OnInit {

	private position: string = '';
	private id: string = '';

  constructor(private matDialogRef: MatDialogRef<PositionComponent>,
              private appComponent: AppComponent,
  						private participantsService: ParticipantsService,
  						@Inject(MAT_DIALOG_DATA) public data: any) 
  { 
  	this.position = data.position;
  	this.id = data.id;
  }

  ngOnInit() {
  }

  private submit2(): void {
    this.appComponent.test2();
  };

  private submit(): void {
  	//alert(this.id + ' ' + this.position);
  	this.participantsService.setPosition(this.id, this.position);  	
  	this.matDialogRef.close();
    
  };

}
