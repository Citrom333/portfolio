import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ConnectComponent } from './connect/connect.component';
@Component({
  selector: 'mainPage',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ProjectsComponent,
    AboutComponent,
    ConnectComponent
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

  showAbout: boolean = true;
  showProjects: boolean = false;
  showConnect: boolean = false;

  openProjects() {
    this.showAbout = false;
    this.showProjects = true;
    this.showConnect = false;
  }
  openConnect() {
    this.showAbout = false;
    this.showProjects = false;
    this.showConnect = true;
  }
  openMain() {
    this.showAbout = true;
    this.showProjects = false;
    this.showConnect = false;
  }
}
