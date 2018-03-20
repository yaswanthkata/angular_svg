import { Component, OnInit } from '@angular/core';
import { Circle, Line } from './models';
import { TimeLineEvent, EventDirection } from 'ng4-timeline';

@Component({
  selector: 'svg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  public timelineEvents: TimeLineEvent[];

  public eventsAlignment: EventDirection;
  constructor() {
    this.timelineEvents = new Array<TimeLineEvent>();

  }

  ngOnInit(): void {
    this.eventsAlignment = EventDirection.LEFT;
    this.timelineEvents.push({
      title: 'Freelancer', time: '2013 - present',
      description: 'My current employment.Way better than the position before!'
    });
    this.timelineEvents.push({
      title: 'Facebook', time: '2011 - 2013',
      description: 'My second employment.Great work.'
    });
    this.timelineEvents.push({
      title: 'Google', time: '2009 - 2011',
      description: 'My first employer. All the stuff I\'ve learned and projects I\'ve been working on.'
    });
  }
}
