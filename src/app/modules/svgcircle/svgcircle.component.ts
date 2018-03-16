import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Circle, ElementEventClick } from '../../models';

@Component({
  selector: 'g[svg-circle]',
  templateUrl: './svgcircle.component.html',
  styleUrls: ['./svgcircle.component.css']
})
export class SvgcircleComponent implements OnInit {


  constructor() { }


  @Input()
  public circle: Circle;

  @Output()
  public circleMousedown = new EventEmitter<{ mouseEvent: MouseEvent, circle: Circle }>();

  ngOnInit() {
  }

  public onCircleMouseDown($event) {
    if ($event) {
      this.circleMousedown.emit({ mouseEvent: $event, circle: this.circle });
    }

  }
}
