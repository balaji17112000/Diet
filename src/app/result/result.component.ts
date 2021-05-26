import { Component, OnInit} from '@angular/core';
import details from '../json/details.json';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DetailsComponent} from '../details/details.component';
import {InteractionService} from '../interaction.service'; 
var i =0;
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent  implements OnInit{
  drop:boolean = false;
  detaillist:{name:String, kg:String, week:Boolean, month:Boolean, tilldate:String}[]=details;
  constructor( public dialogRef: MatDialogRef<DetailsComponent>, private _interservice: InteractionService, public dialog: MatDialog ) { }
  mssg: string;
  mssg1: string;
  mssg2: string;
  mssg3: string;
  
  ngOnInit() {
	  this._interservice.parentmsg$
	  .subscribe(
	  message=>{
		  for(i=i;i<4;i=i+1) { 
					if(i==0){
				  this.mssg = message; 
				  
				  i=i+1;
				  break;
					}
					if(i==1){
				  this.mssg1 = message; 
				  
				  i=i+1;
				  break
					}
					if(i==2){
				  this.mssg2 = message; 
				  
				  i=i+1;
				  break
					}
				  if(i==3){
				  this.mssg3 = message; 
				  
				  i=i+1;
				  break
					}					
						
				}
			  }
			  );
			
  }
  onSubmit() {
	  this.dialogRef.close([]);
  }
  
  openfood() {
    this.dialog.open(DetailsComponent, {width: '357px'});
  }
  
}
