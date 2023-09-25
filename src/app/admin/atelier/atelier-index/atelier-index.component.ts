import { Component,OnInit } from '@angular/core';
import { Atelier } from 'src/app/shared/models/atelier';
import { AtelierService } from 'src/app/shared/services/atelier.service';
import { FormGroup } from '@angular/forms';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-atelier-index',
  templateUrl: './atelier-index.component.html',
  styleUrls: ['./atelier-index.component.css']
})
export class AtelierIndexComponent implements OnInit{

  ateliers : Atelier[] | any;
  items: MenuItem[] | undefined;
  constructor(private atelierService : AtelierService){}

  ngOnInit(): void {
    this.atelierService.getAllAtelier().subscribe((data)=>{
      this.ateliers = data;
      console.log("voici les donnees ",data)
    })
  }

}
