

import { MessagesService } from './../../../services/messages.service';
import { routes } from './../../../../../../pagina-web/src/app/app.routes';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MomentService } from '../../../services/moment.service';
import { FormGroup, FormControl, Validators, FormGroupDirective} from '@angular/forms';



import { ComentService } from '../../../services/coment.service';
import { Comment } from '../../../comment';
import { Moment } from '../../../moment';
import { environment } from '../../../../environments/environment';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrl: './moment.component.css'
})
export class MomentComponent {
moment?: Moment;
baseApiUrl = environment.baseApiUrl;
faTimes = faTimes;
faEdit = faEdit;
commentForm! : FormGroup

constructor (
  private MomentService: MomentService,
  private route: ActivatedRoute,
  private MessagesService: MessagesService,
  private Router: Router,
  private comentService: ComentService
){}

ngOnInit(): void {
  const id = Number(this.route.snapshot.paramMap.get("id"));

  this.MomentService
  .getMoment(id)
  .subscribe((item) => (this.moment = item.data));

  this.commentForm = new FormGroup({
    text: new FormControl("", [Validators.required]),
    username: new FormControl("", [Validators.required]),
  });
}
get text(){
  return this.commentForm.get('text')!;
}

get username () {
  return this.commentForm.get('username')!;
}

async removeHandler (id: number) {
  await this.MomentService.removeMoment(id).subscribe()
  this.MessagesService.add("Momento excluido com Sucesso")
  this.Router.navigate(['/'])
}
async onSubmit(formDirective: FormGroupDirective){
  if(this.commentForm.invalid){
    return
  }

  const data: Comment = this.commentForm.value;
  data.momentId = Number(this.moment!.id)

  await this.comentService
    .createComment(data)
    .subscribe((comment) => this.moment!.comments!.push(comment.data));

    this.MessagesService.add("Comentário adicionado")

    this.commentForm.reset();

    formDirective.resetForm();
  }
}  