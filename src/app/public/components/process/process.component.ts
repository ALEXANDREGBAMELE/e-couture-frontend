import { Component } from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent {

  events: string[];

  constructor() {
      this.events = [
          "", "", "", ""
      ];
  }

}
