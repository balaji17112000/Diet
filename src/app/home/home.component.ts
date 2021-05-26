import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FirstComponent } from '../first/first.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public dialog: MatDialog ) { }

  ngOnInit() {
  }

  openLoginForm() {
    this.dialog.open(FirstComponent, {width: '357px', height: '214px'});
  }

}
