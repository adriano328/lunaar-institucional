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


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    Sobre, Historia, Banner, Fazemos, Missao, Equipe,
    Parceiros, ColetaDoacoes, Arrecadacao
  ],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss',
})
export class Inicio {

  
}
