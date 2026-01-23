import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './carrosel.component.html',
  styleUrl: './carrosel.component.scss',
})
export class CarouselComponent {

  fotos: string[] = [
    'assets/images/fotos/1.png',
    'assets/images/fotos/2.png',
    'assets/images/fotos/3.png',
    'assets/images/fotos/4.png',
    'assets/images/fotos/5.png',
    'assets/images/fotos/6.png',
    'assets/images/fotos/7.png',
    'assets/images/fotos/8.png',
    'assets/images/fotos/9.png',
    'assets/images/fotos/10.png',
  ];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];
}
