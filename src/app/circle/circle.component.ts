import { Component, OnInit ,Input } from '@angular/core';
import { Circle } from '../models/circle.model';
@Component({
  selector: 'g[ng-circle]',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {

  @Input()
  public circle:Circle;

  constructor() { }

  ngOnInit() {
  }

}
