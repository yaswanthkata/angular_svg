import { Stroke } from './stroke.model';

export class Circle {
    cx: number;
    cy: number;
    radius: number;
    stroke: Stroke;
    constructor() {
         this.stroke = new Stroke();
    }
}
