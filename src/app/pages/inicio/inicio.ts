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


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    Sobre, Historia, Banner, Fazemos, Equipe, NotaMtComponent,
    Parceiros, ColetaDoacoes, Arrecadacao, DenunciaComponent, DialogModule,
    BeecomeComponent, EnergisaComponent
  ],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss',
})
export class Inicio {

  isBrowser = false;
  visible = false;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      queueMicrotask(() => {
        // this.visible = true;
      });
    }
  }

  close() {
    this.visible = false;
  }

  navegar(url: string) {
    window.open(url, '_blank', 'noopener');
  }
}
