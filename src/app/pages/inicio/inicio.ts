import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Sobre } from '../sobre/sobre';
import { Historia } from '../historia/historia';
import { Banner } from '../banner/banner';
import { Fazemos } from '../fazemos/fazemos';
import { Equipe } from '../equipe/equipe';
import { Parceiros } from '../parceiros/parceiros';
import { ColetaDoacoes } from '../coleta-doacoes/coleta-doacoes';
import { Arrecadacao } from '../arrecadacao/arrecadacao';
import { DenunciaComponent } from '../denuncia/denuncia.component';
import { NotaMtComponent } from '../nota-mt/nota-mt.component';
import { DialogModule } from 'primeng/dialog';
import { isPlatformBrowser } from '@angular/common';
import { BeecomeComponent } from '../beecome/beecome.component';
import { EnergisaComponent } from '../energisa/energisa.component';
import { CastramovelComponent } from '../castramovel/castramovel.component';
import { CarouselModule } from 'primeng/carousel';
import { AvisoMuralItem, AvisosMuralComponent } from '../../core/components/avisos-mural/avisos-mural.component';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    Sobre, Historia, Banner, Fazemos, Equipe, NotaMtComponent,
    Parceiros, ColetaDoacoes, Arrecadacao, DenunciaComponent, DialogModule,
    BeecomeComponent, EnergisaComponent, CastramovelComponent, AvisosMuralComponent
  ],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss',
})
export class Inicio {

  isBrowser = false;
  avisosVisible = false;

  constructor(
    @Inject(PLATFORM_ID) platformId: object,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      queueMicrotask(() => {
        this.avisosVisible = true;
      });
    }
  }

  close() {
    this.avisosVisible = false;
  }

  navegar(url: string) {
    window.open(url, '_blank', 'noopener');
  }

  avisos: AvisoMuralItem[] = [
    {
      titulo: 'Rifa Solidária',
      descricao: 'Concorra e ajude a Lunaar.',
      imgSrc: 'assets/images/camisa.png',
      alt: 'Campanha Camisa',
      link: 'https://reserva.ink/chicaoloja/collections/adote',
      badge: 'DESTAQUE',
      showTitulo: false,
      showDescricao: false,
      showCTA: false,
      clickable: true,
      ctaLabel: 'Abrir rifa'
    },
    {
      titulo: 'ST PET`RICKS DAY',
      descricao: 'Vote na Lunaar e participe.',
      imgSrc: 'assets/images/festa.jpg',
      alt: 'Campanha Sicredi',
      link: 'https://facepassbrasil.com.br/evento/6b7b0f27-3232-4663-9a69-5b439b0d0b29/ingressos',
      badge: 'NOVO',
      showTitulo: false,
      showDescricao: false,
      showCTA: false,
      clickable: true,
      ctaLabel: ''
    }
  ];

}
