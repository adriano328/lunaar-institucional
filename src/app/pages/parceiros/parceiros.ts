import { Component, OnInit } from '@angular/core';
import { LocalColeta } from '../../../interface/localColeto.model';

@Component({
  selector: 'app-parceiros',
  imports: [],
  standalone: true,
  templateUrl: './parceiros.html',
  styleUrl: './parceiros.scss',
})
export class Parceiros implements OnInit {

  parceiros: LocalColeta[] = [];

  ngOnInit(): void {
    this.parceiros = [
      {
        nome: 'PET HOUSE GOIABEIRAS',
        endereco: 'Av. Ipiranga, nº 121, Goiabeiras, Cuiabá - MT',
        map: 'https://www.google.com/maps/place/Pet+House+Goiabeiras/@-15.5959286,-56.1048738,17z/data=!3m1!4b1!4m6!3m5!1s0x939db18e69da8521:0x8ff9917a12601134!8m2!3d-15.5959286!4d-56.1048738!16s%2Fg%2F11cntr6tv6?entry=ttu&g_ep=EgoyMDI2MDEyMC4wIKXMDSoASAFQAw%3D%3D'
      },
      {
        nome: 'AME + PET CENTER',
        endereco: 'Av. Hist. Rubens de Mendonça, 1784, Bosque da Saúde, Cuiabá - MT',
        map: 'https://www.google.com/maps/place/Ame+%2B+Pet+Center/@-15.5854149,-56.0828159,17z/data=!3m1!4b1!4m6!3m5!1s0x939db19b415e3f67:0x45d9af1858ad18a7!8m2!3d-15.5854201!4d-56.080241!16s%2Fg%2F11ng706ppx?entry=ttu&g_ep=EgoyMDI2MDEyMC4wIKXMDSoASAFQAw%3D%3D'
      },
      {
        nome: 'CLÍNICA VETERINÁRIA MIA VITA',
        endereco: 'Dep. Milton de Figueiredo, 283, Morada do Ouro, Cuiabá - MT',
        map: 'https://www.google.com/maps/place/Cl%C3%ADnica+Veterin%C3%A1ria+e+Pet+Shop+MIA+VITA/@-15.5672942,-56.0662847,17z/data=!3m1!4b1!4m6!3m5!1s0x939db1240426862f:0xcbf945f2b6e34aad!8m2!3d-15.5672994!4d-56.0637098!16s%2Fg%2F11y2mtz0_b?entry=ttu&g_ep=EgoyMDI2MDEyMC4wIKXMDSoASAFQAw%3D%3D'
      },
      {
        nome: 'CLÍNICA VETERINÁRIA CUIABANA',
        endereco: 'Av. das Torres, 11, Jardim Universitário, Cuiabá - MT',
        map: 'https://www.google.com/maps/place/Cl%C3%ADnica+Veterin%C3%A1ria+Cuiabana/@-15.612057,-56.0339554,17z/data=!3m1!4b1!4m6!3m5!1s0x939daf822996b733:0x5428748d9e04621c!8m2!3d-15.6120622!4d-56.0313805!16s%2Fg%2F11l73vpc2p?entry=ttu&g_ep=EgoyMDI2MDEyMC4wIKXMDSoASAFQAw%3D%3D'
      },
      {
        nome: 'PET-DRIVE',
        endereco: 'Gen. Ramiro de Noronha, 1000, Duque de Caxias, Cuiabá - MT',
        map: 'https://www.google.com/maps/place/Pet-Drive+Animal/@-15.5909241,-56.1192994,17z/data=!3m1!4b1!4m6!3m5!1s0x939db311ea0b1537:0xe1c158f05d02ddfb!8m2!3d-15.5909293!4d-56.1167245!16s%2Fg%2F11w_wlvq29?entry=ttu&g_ep=EgoyMDI2MDEyMC4wIKXMDSoASAFQAw%3D%3D'
      },
      {
        nome: 'GP MOTO PEÇAS',
        endereco: 'Av. Gov. Júlio Campos, 3710, Jardim Paula, Várzea Grande - MT',
        map: 'https://www.google.com/maps/place/MOTO+PECAS/@-15.6473578,-56.1552583,17z/data=!3m2!4b1!5s0x939dad99487c11e5:0x624b36b8f6ec1a76!4m6!3m5!1s0x939dad994621652f:0x26a9a6f58c10f83!8m2!3d-15.647363!4d-56.1526834!16s%2Fg%2F11d_bkfl02?entry=ttu&g_ep=EgoyMDI2MDEyMC4wIKXMDSoASAFQAw%3D%3D'
      }
    ];
  }

  abrirMaps(url: string) {
    window.open(url, '_blank');
  }

}
