import { Component } from '@angular/core';
import { Circle, Line } from './models';

@Component({
  selector: 'svg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public circle: Circle;
  public line: Line;
  constructor() {
    this.circle = { cx: 50, cy: 50, radius: 10, stroke: null };
    this.line = { x1: 100, y1: 100, x2: 1000, y2: 300, stroke: null };
  }
  title = 'app';

  public onCircleClick(event): void {
    console.log(event);
  }

  public onLineClick(event): void {
    console.log(event);
  }
}
