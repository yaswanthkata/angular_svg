import { Component, OnInit } from '@angular/core';
import { Circle } from './models/circle.model';
import { Line } from './models/line.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private circles: Circle[];
  private lines: Line[];
  ngOnInit(): void {
    this.circles = [{ x: 20, y: 50, r: 10 }, { x: 20, y: 150, r: 15 }, { x: 20, y: 250, r: 20 }, { x: 20, y: 350, r: 25 }];
    this.lines = [{ x1: 130, y1: 20, x2: 300, y2: 20 } ,{ x1: 130, y1: 50, x2: 400, y2: 50 }];
  }
  title = 'app works!';


}
