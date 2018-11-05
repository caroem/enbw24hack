import { Component, Input } from '@angular/core';

@Component({
  selector: 'mat-quality-control',
  templateUrl: './mat-quality-control.component.html',
  styleUrls: ['./mat-quality-control.component.css']
})
export class MatQualityControlComponent {
  @Input() video: HTMLVideoElement;

  constructor() { }

}
