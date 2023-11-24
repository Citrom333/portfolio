import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  backendUrl = "api";
  @Input() projects: { description: { title: string | undefined, link1: string | undefined, link2: string | undefined, about: string | undefined }, image: { src: string; alt: string } }[] = [];
}
