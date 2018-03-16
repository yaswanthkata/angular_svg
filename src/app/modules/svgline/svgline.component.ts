import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Line } from '../../models';

@Component({
  selector: 'g[svg-line]',
  templateUrl: './svgline.component.html',
  styleUrls: ['./svgline.component.css']
})
export class SvglineComponent implements OnInit {



  constructor() { }


  @Input()
  public line: Line;

  @Output()
  public lineMousedown = new EventEmitter<{ mouseEvent: MouseEvent, line: Line }>();

  ngOnInit() {
  }

  public onLineMouseDown($event): void {
    if ($event) {
      this.lineMousedown.emit({ mouseEvent: $event, line: this.line });
    }
  }
}
