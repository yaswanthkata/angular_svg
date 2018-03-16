import { Circle } from './circle.model';
import { Line } from './line.model';

export interface ElementEventClick {
    originalEvent: MouseEvent;
    svgElement: Circle | Line;
}
