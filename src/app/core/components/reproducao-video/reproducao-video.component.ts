import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reproducao-video',
  standalone: true,
  imports: [],
  templateUrl: './reproducao-video.component.html',
  styleUrl: './reproducao-video.component.scss'
})
export class ReproducaoVideoComponent {

  @Input() videoSrc!: string;
  @Input() title?: string;
  @Input() subtitle?: string;


}
