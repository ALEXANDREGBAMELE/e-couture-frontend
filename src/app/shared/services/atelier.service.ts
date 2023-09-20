import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Article } from '../models/article';
import { Observable } from 'rxjs';
import { Atelier } from '../models/atelier';

@Injectable({
  providedIn: 'root'
})
export class AtelierService {

  constructor(private httpService : ApiService){}

  getAtelier(id: number) {
    
   return this.httpService.get(`/atelier/get/${id}`);
  }

  getAllAtelier() {
    
   return this.httpService.get(`/atelier/get`);
  }

  createAtelier(atelier : Atelier): Observable<Object>{
   return this.httpService.post({endpoint : '/atelier/add', data : atelier});
  }

  updateAtelier(atelier : Atelier) {
   return this.httpService.put({endpoint : '/atelier/update',data : atelier});
 }


  deleteAtelier(atelier_id : any) {
    return this.httpService.delete(`/atelier/dele${atelier_id}`);
  }

}