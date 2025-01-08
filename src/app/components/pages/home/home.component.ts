
import { MomentService } from './../../../services/moment.service';
import { Component } from '@angular/core';


import { Moment } from '../../../moment';

import { environment } from '../../../../environments/environment';

import { faSearch } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 allMoments: Moment [] = []
 moments: Moment[] = []
 baseApiUrl = environment.baseApiUrl

 faSearch = faSearch;
 searchTerm: String = '';

constructor (private momentService: MomentService){}

ngOnInit(): void {
  this.momentService.getMoments().subscribe((items)=> { 
    const data = items.data
    data.map((item) => {
      item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR');
    })

    this.allMoments = data;  
    this.moments = data;
  })

}
search(e: Event): void {
  const target = e.target as HTMLInputElement
  const value = target.value


  this.moments = this.allMoments.filter(moment => {
    return moment.title.toLowerCase().includes(value);
  });  

}


}