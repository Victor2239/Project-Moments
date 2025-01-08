import { MessagesService } from './../../services/messages.service';
import { Component } from '@angular/core';

import {faTimes} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {

  faTimes= faTimes;

  constructor(public MessagesService: MessagesService) {}

}
