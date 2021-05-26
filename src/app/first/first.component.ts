import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DietComponent } from '../diet/diet.component';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(public dialog: MatDialog ) { }

  ngOnInit() {
  }

  openDiet() {
    this.dialog.open(DietComponent,{width: '357px', height: '463px'});
  }
  

}
