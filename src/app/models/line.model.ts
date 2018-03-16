import { Stroke } from './stroke.model';

export class Line {
    public x1: number;
    public y1: number;
    public x2: number;
    public y2: number;
    public stroke: Stroke;

    constructor() {
        this.stroke = new Stroke();
    }
}
