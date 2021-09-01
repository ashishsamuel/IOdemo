import { Component } from '@angular/core';
import { flowers } from './flower-data';
import { Flowers } from './flowers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' Different types of Flowers';
  yellowflower=flowers[0];
  redflower=flowers[1];
  greenflower=flowers[2];

  onFlowerclick(){
    console.log("app component---- click event bubbled")
  }

  onFlowerselect(flow:Flowers){
    console.log("app component---- click event bubbled",flow);
  }

}
