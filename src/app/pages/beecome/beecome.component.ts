import { Component } from '@angular/core';

@Component({
  selector: 'app-beecome',
  standalone: true,
  imports: [],
  templateUrl: './beecome.component.html',
  styleUrl: './beecome.component.scss'
})
export class BeecomeComponent {

  navegar(url: string) {
    window.open(url, '_blank', 'noopener');
  }

}
