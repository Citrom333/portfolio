import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate(1000, style({ opacity: 0 }))
      ]),
    ]),

  ]
})
export class AboutComponent {
  showLooseText: boolean = false;

  toggleText() {
    this.showLooseText = !this.showLooseText;
  }
  showLooseText2: boolean = false;

  toggleText2() {
    this.showLooseText2 = !this.showLooseText2;
  }
  showMain: boolean = true;
  showProjects: boolean = false;
  showConnect: boolean = false;
}
