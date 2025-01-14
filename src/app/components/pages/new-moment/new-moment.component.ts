

import { title } from 'process';
import { Moment } from '../../../moment';
import { Component } from '@angular/core';

import { MomentService } from '../../../services/moment.service';
import { MessagesService } from '../../../services/messages.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrl: './new-moment.component.css'
})
export class NewMomentComponent {
btnText = 'Compartilhar!'

constructor (
  private momentService: MomentService, 
  private MessagesService: MessagesService,
  private router: Router
) {}
  
async createHandler (moment: Moment){
  const formData = new FormData()

  formData.append("title", moment.title)
  formData.append("description" , moment.description)

  if (moment.image) {
    formData.append('image' , moment.image);
  }

  await this.momentService.createMoment(formData).subscribe();

  this.MessagesService.add('Momento adicionado com sucesso!')

  this.router.navigate(['/']);
}
}
