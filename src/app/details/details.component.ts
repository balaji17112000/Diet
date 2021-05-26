import { Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ResultComponent } from '../result/result.component';
import {InteractionService} from '../interaction.service'; 
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
	pick:false;
  user = {foodname: '', kg: '', weekly: false, monthly: false, tilldate: '', pickupdate: ''};
  constructor( public dialog: MatDialog, public dialogRef: MatDialogRef<DetailsComponent>, private _interservice: InteractionService) { }
  
  ngOnInit() {
	 
  }
  
  onSubmit() {
	  var name=this.user.foodname;
	  var week=this.user.weekly;
	  var kg=this.user.kg;
	  var month=this.user.monthly;
	  var tilldate=this.user.tilldate;
	  var pickdate=this.user.pickupdate;
	this._interservice.SendMessage(name,kg, tilldate, pickdate);
    console.log('User: ', this.user);
      this.dialogRef.close([]);
	  
  this.dialog.open(ResultComponent,{width: '357px', height: '560px'});
}
openfood() {
	this.dialogRef.close([]);
    this.dialog.open(DetailsComponent, {width: '357px'});

  }


}
