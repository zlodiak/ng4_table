import { Component, OnInit, Inject } from '@angular/core';

import { Http } from '@angular/http';
import { MatDialog } from '@angular/material';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Observable } from 'rxjs/Observable';

import { Config } from './config';
import { Participant } from './types/participant';
//import { PositionComponent } from './modals/position/position.component';


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
  
  constructor(private http: Http, 
              private matDialog: MatDialog) 
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
        localStorage.participants = JSON.stringify(participants);                                                                                                                         
        console.log('this.participants', this.participants); 
      }, 
      err => {
        console.log('err')         
      });
    } 
  };  

  private handlerClick(event): void {   
    let tagName = event.target.tagName    
    let elId = (tagName == 'SPAN') ? event.target.parentElement.id : event.target.id;  

    let rowId = elId.split('_')[1];
    let colId = elId.split('_')[2];

    console.log(elId, rowId, colId);

    if(colId == 'id') { 
      console.log('rettt');
      return; 
    }

    //prompt('Введите свойство ' + colId + ' для участника с ID=' + rowId);

    let contentTD = document.getElementById(elId).innerHTML;
    console.log('contentTD', contentTD);

    if(colId == 'position') {
      this.matDialog.open(PositionComponent, {
        width: '400px',
        data: { title: 'Введите название должности.', position: contentTD, id: rowId }
      });      
    }
  };

  public test() {
    console.log('test');
    alert('test');
  };

  public test2() {
    console.log('test2');
    alert('test2');
  };  

  private addParticipant() {
    this.matDialog.open(DialogOverviewExampleDialog, {
      width: '400px',
      data: { title: 'Создание нового участника.', id: 666  }
    });  
  };


}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
  providers: [AppComponent],
})
export class DialogOverviewExampleDialog {

  private id_: string = '';

  constructor(
    private appComponent: AppComponent,
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) private data: any) { 
    this.id_ = data.id;

    setTimeout(function() {
      appComponent.test();
    }, 1000);
  }

}
