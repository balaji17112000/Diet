import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DetailsComponent } from '../details/details.component';
@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.css']
})
export class DietComponent implements OnInit {

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<DetailsComponent> ) { }

  ngOnInit() {
  }

  openfood() {
	  
    this.dialog.open(DetailsComponent, {width: '357px'});
	 this.dialogRef.close([]);
  }
  

}

