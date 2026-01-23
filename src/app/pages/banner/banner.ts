import { Component } from '@angular/core';
import { Header } from '../../core/layout/header/header';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [Header],
  templateUrl: './banner.html',
  styleUrl: './banner.scss',
})
export class Banner {


  navegar(url: string) {
    console.log('clicou:', url);
    window.open(url, '_blank', 'noopener');
  }
}
