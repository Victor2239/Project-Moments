import { Injectable } from '@angular/core';
import { clear } from 'console';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  message: string = '';

  constructor() { }
  add(message: string ) {
    this.message = message
  
  setTimeout(() => {
    this.clear();
  }, 4000);
  }
  clear(){
    this.message = '';
  }
}
