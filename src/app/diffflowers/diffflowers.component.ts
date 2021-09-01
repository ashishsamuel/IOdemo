import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Flowers } from '../flowers';

@Component({
  selector: 'app-diffflowers',
  templateUrl: './diffflowers.component.html',
  styleUrls: ['./diffflowers.component.css']
})
export class DiffflowersComponent implements OnInit {

  @Input()
  f:Flowers;
  // title:any;
  @Output()
  flowerselected = new EventEmitter<Flowers>();
  constructor() { }

  ngOnInit(): void {
  }

  ondiffFlowerclick(){
    console.log("diffflowers component button is clicked");
    this.flowerselected.emit(this.f);
  }
}
