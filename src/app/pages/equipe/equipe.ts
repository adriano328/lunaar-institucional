import { Component } from '@angular/core';

type TeamMember = {
  photoUrl: string;
  name: string;
  role?: string; // opcional
};

@Component({
  selector: 'app-equipe',
  imports: [],
  standalone: true,
  templateUrl: './equipe.html',
  styleUrl: './equipe.scss',
})
export class Equipe {

  members: TeamMember[] = [
    {
      photoUrl: '/assets/images/1.png',
      name: 'Susielene Rodrigues',
      role: 'Presidente',
    },
    {
      photoUrl: '/assets/images/2.png',
      name: 'Alessandra Porto',
      role: 'Vice-Presidente',
    },
    {
      photoUrl: '/assets/images/3.png',
      name: 'Waldina Cayres',
      role: '1° Secretária',
    },
    {
      photoUrl: '/assets/images/4.png',
      name: 'Andreia Quixabeira',
      role: '2° Tesoureiro',
    },
    {
      photoUrl: '/assets/images/5.png',
      name: 'Yedda Fonseca',
      role: '2° Secretária',
    },
    {
      photoUrl: '/assets/images/6.png',
      name: 'Matheus Araujo',
      role: '1° Tesoureiro',
    },
  ];

}
