import { Component, OnInit, Input } from '@angular/core';
import { Line } from '../models/line.model';
@Component({
  selector: 'g[ng-line]',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {

  @Input()
  public line: Line;
  constructor() { }

  ngOnInit() {
  }

}
