import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';

export type AvisoMuralItem = {
  id?: string | number;

  titulo?: string;
  descricao?: string;

  imgSrc: string;
  alt?: string;
  link?: string;
  badge?: string;

  // controles por item
  showTitulo?: boolean;
  showDescricao?: boolean;
  showCTA?: boolean;
  clickable?: boolean;
  ctaLabel?: string;
};

@Component({
  selector: 'app-avisos-mural',
  standalone: true,
  imports: [DialogModule, CommonModule],
  templateUrl: './avisos-mural.component.html',
  styleUrl: './avisos-mural.component.scss',
})
export class AvisosMuralComponent {
  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  @Input() title = 'AVISOS';
  @Input() items: AvisoMuralItem[] = [];

  @Input() maxWidth = '1000px';
  @Input() width = '70vw';
  @Input() cardHeight = 620;

  close() {
    this.visibleChange.emit(false);
  }

  private dTrue(v?: boolean) {
    return v ?? true;
  }

  isClickable(item: AvisoMuralItem) {
    return this.dTrue(item.clickable) && !!item.link;
  }

  showTitulo(item: AvisoMuralItem) {
    return this.dTrue(item.showTitulo) && !!item.titulo;
  }

  showDescricao(item: AvisoMuralItem) {
    return this.dTrue(item.showDescricao) && !!item.descricao;
  }

  showCTA(item: AvisoMuralItem) {
    return this.dTrue(item.showCTA) && !!item.link;
  }

  getCtaLabel(item: AvisoMuralItem) {
    return item.ctaLabel || 'Clique para abrir';
  }

  openLink(item: AvisoMuralItem) {
    if (!this.isClickable(item)) return;
    window.open(item.link!, '_blank', 'noopener,noreferrer');
  }

  openLinkFromCTA(item: AvisoMuralItem, ev: MouseEvent) {
    ev.stopPropagation();
    if (!item.link) return;
    window.open(item.link, '_blank', 'noopener,noreferrer');
  }
}
