import { Component } from '@angular/core';

@Component({
  selector: 'app-energisa',
  standalone: true,
  imports: [],
  templateUrl: './energisa.component.html',
  styleUrl: './energisa.component.scss'
})
export class EnergisaComponent {

  navegar(url: string) {
    window.open(url, '_blank', 'noopener');
  }
}
