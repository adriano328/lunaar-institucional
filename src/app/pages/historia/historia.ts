import { Component, OnInit } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { TimeLine } from '../../core/components/time-line/time-line';
import { TimelineItem } from '../../../interface/eventos.model';
import { CarouselComponent } from '../../core/components/carrosel/carrosel.component';

@Component({
  selector: 'app-historia',
  standalone: true,
  imports: [TimeLine, CarouselComponent],
  templateUrl: './historia.html',
  styleUrl: './historia.scss',
})
export class Historia implements OnInit {

  events!: TimelineItem[];

  ngOnInit(): void {
    this.events = [
      {
        ano: 2017,
        descricao:
          "Iniciamos nossa atuação na Universidade Federal de Mato Grosso (UFMT) alimentando e castrando os felinos comunitários que residem no campus."
      },
      {
        ano: 2019,
        descricao:
          "Os resgates expandiram para toda a capital Cuiabá e as casas dos voluntários se tornaram lares temporários até que os animais fossem adotados."
      },
      {
        ano: 2020,
        descricao:
          "Conseguimos um espaço físico emprestado, os resgates e a visibilidade da LUNAAR aumentaram e realizamos nossa regularização como pessoa jurídica."
      },
      {
        ano: 2023,
        descricao:
          "Compramos um terreno e construímos um espaço com 9 canis, incluindo um para animais paraplégicos, lavanderia e 2 petparks. Também conquistamos o título de utilidade pública municipal em Cuiabá - MT."
      },
      {
        ano: 2024,
        descricao:
          "Inicio de atuação do Castramóvel."
      }
    ];
  }


}
