import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-reproducao-video',
  standalone: true,
  imports: [],
  templateUrl: './reproducao-video.component.html',
  styleUrl: './reproducao-video.component.scss'
})
export class ReproducaoVideoComponent {

 @ViewChild('player', { static: true }) player!: ElementRef<HTMLVideoElement>;

  @Input() videoSrc!: string;

  @Input() autoplay = true;
  @Input() muted = true;
  @Input() loop = true;
  @Input() playsInline = true;

  @Input() showPlayOverlay = true;

  @Input() title?: string;
  @Input() subtitle?: string;

  isPlaying = false;

  async togglePlay() {
    const video = this.player.nativeElement;

    try {
      if (video.paused) {
        await video.play();
        this.isPlaying = true;
      } else {
        video.pause();
        this.isPlaying = false;
      }
    } catch {
      // alguns browsers bloqueiam play com som sem interação válida
      // se acontecer, tente iniciar mutado
      video.muted = true;
      await video.play();
      this.isPlaying = true;
    }
  }
  

}
