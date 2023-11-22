import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { trigger, state, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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

export class AppComponent {
  title = 'portfoliopageapp';
  showLooseText: boolean = false;

  toggleText() {
    this.showLooseText = !this.showLooseText;
  }
  showLooseText2: boolean = false;

  toggleText2() {
    this.showLooseText2 = !this.showLooseText2;
  }
}
