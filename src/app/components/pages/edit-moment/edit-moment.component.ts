import { MessagesService } from './../../../services/messages.service';
import { IfRenderComponent } from './../../../../../../page-web/src/app/components/if-render/if-render.component';

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Moment } from '../../../moment';

import { MomentService } from '../../../services/moment.service';
import { privateDecrypt } from 'crypto';
@Component({
  selector: 'app-edit-moment',
  templateUrl: './edit-moment.component.html',
  styleUrl: './edit-moment.component.css'
})
export class EditMomentComponent {
  moment!: Moment;
  btnText: string = "editar" ;

  constructor (
    private MomentService: MomentService,
    private route: ActivatedRoute,
    private messagesService : MessagesService,
    private router : Router
  ){}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.MomentService.getMoment(id).subscribe((item) =>{
      this.moment = item.data;
    })
  }
   async editHandler(momentData: Moment) {
    const id = this.moment.id

    const formData = new FormData()

    formData.append('title', momentData.title);
    formData.append('description', momentData.description);

    if (momentData.image){
      formData.append('iamge', momentData.image);
    }
    await this.MomentService.updateMoment(id!, formData).subscribe()

    this.messagesService.add('Moment $(id) foi atualizado com sucesso!')

    this.router.navigate(['/'])
  }
}
