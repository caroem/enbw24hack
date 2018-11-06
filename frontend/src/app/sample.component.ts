import { Component, VERSION } from '@angular/core';
import * as buildInfo from './../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
})
export class SampleComponent {
  version = VERSION.full;
  appversion: string = (<any>buildInfo)['version'];

  ngclass = 'mat-video-responsive';

  src = 'assets/output.mp4';
  title = 'Gefaegnis Ueberwachung';
  width = 600;
  height = 337.5;
  autoplay = true;
  preload = true;
  loop = true;
  quality = false;
  download = false;
  fullscreen = false;
  color = 'primary';
  spinner = 'spin';
  poster = 'assets/kurve.PNG';

}
