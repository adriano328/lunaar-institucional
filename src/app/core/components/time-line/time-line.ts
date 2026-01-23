import { Component, Input } from '@angular/core';
import { TimelineItem } from '../../../../interface/eventos.model';

@Component({
  selector: 'app-time-line',
  imports: [],
  standalone: true,
  templateUrl: './time-line.html',
  styleUrl: './time-line.scss',
})
export class TimeLine {
  @Input() items: TimelineItem[] = [];

}
