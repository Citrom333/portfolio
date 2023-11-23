import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
@Component({
  selector: 'mainPage',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ProjectsComponent,
    AboutComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate("600ms 700ms", style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate("600ms", style({ opacity: 0 }))
      ]),
    ]),
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-400px)' }),
        animate(
          1500,
          style({ opacity: 1, transform: 'translateX(0)' })
        )
      ]),
      transition(':leave', [

        animate(
          1500,
          style({ opacity: 0, transform: 'translateX(-400px)' })
        )
      ])]),
  ]
})

export class AppComponent {
  title = 'portfoliopageapp';
  showMenu: boolean = false;
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  showAbout: boolean = true;
  showProjects: boolean = false;
  showContact: boolean = false;

  openProjects() {
    this.showProjects = true;
    this.showAbout = false;
    this.showContact = false;
  }
  openContact() {
    this.showContact = true;
    this.showAbout = false;
    this.showProjects = false;
  }
  openMain() {
    this.showAbout = true;
    this.showProjects = false;
    this.showContact = false;
  }
}
