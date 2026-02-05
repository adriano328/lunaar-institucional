import { Component, OnInit } from '@angular/core';
import { LocalColeta } from '../../../interface/localColeto.model';

type Partner = { name: string; logoUrl: string };

@Component({
  selector: 'app-parceiros',
  imports: [],
  standalone: true,
  templateUrl: './parceiros.html',
  styleUrl: './parceiros.scss',
})
export class Parceiros {

  partners: Partner[] = [
    { name: '', logoUrl: '/assets/images/parceiros/1.png' },
    { name: '', logoUrl: '/assets/images/parceiros/2.png' },
    { name: '', logoUrl: '/assets/images/parceiros/3.png' },
    { name: '', logoUrl: '/assets/images/parceiros/4.png' },
    { name: '', logoUrl: '/assets/images/parceiros/5.png' },
    { name: '', logoUrl: '/assets/images/parceiros/6.png' },
    { name: '', logoUrl: '/assets/images/parceiros/7.png' },
    { name: '', logoUrl: '/assets/images/parceiros/8.png' },
    { name: '', logoUrl: '/assets/images/parceiros/9.png' },
    { name: '', logoUrl: '/assets/images/parceiros/10.png' },
  ];

}
