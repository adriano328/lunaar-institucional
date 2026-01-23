import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  isOpen = false;
  toggle() { this.isOpen = !this.isOpen; }
  close() { this.isOpen = false; }
}
