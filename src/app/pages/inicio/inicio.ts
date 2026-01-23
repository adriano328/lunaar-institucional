import { Component } from '@angular/core';
import { Header } from '../../core/layout/header/header';
import { Sobre } from '../sobre/sobre';
import { Historia } from '../historia/historia';
import { Banner } from '../banner/banner';
import { Fazemos } from '../fazemos/fazemos';
import { Missao } from '../missao/missao';
import { Equipe } from '../equipe/equipe';
import { Parceiros } from '../parceiros/parceiros';
import { ColetaDoacoes } from '../coleta-doacoes/coleta-doacoes';
import { Arrecadacao } from '../arrecadacao/arrecadacao';
import { DenunciaComponent } from '../denuncia/denuncia.component';
import { NotaMtComponent } from '../nota-mt/nota-mt.component';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    Sobre, Historia, Banner, Fazemos, Equipe, NotaMtComponent,
    Parceiros, ColetaDoacoes, Arrecadacao, DenunciaComponent
  ],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss',
})
export class Inicio {

  
}
