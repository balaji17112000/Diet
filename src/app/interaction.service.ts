import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InteractionService {
	private _msg = new Subject<string>();
	parentmsg$ = this._msg.asObservable();
  constructor() { }
  SendMessage(message: string, message1: string,  message2: string,  message3: string){
	  this._msg.next(message);
	  this._msg.next(message1);
	  this._msg.next(message2);
	  this._msg.next(message3);
  }
}
