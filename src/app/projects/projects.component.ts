import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
import { CardComponent } from '../card/card.component';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ImageSliderComponent, CardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  backendUrl = "http://localhost:3500";
  parentProjects = [
    { description: { title: "Family Organizer", link1: "https://github.com/Citrom333/OrganizeYourFamily", link2: "https://familyorganizer.xyz", about: "My last pet project has a C# backend, and JS frontend. The idea was to create an application for families with a common calendar to organize tasks and programs. It handles MSSQL database, and uses authentication and authorization." }, image: { src: "../../assets/projectpics/projectimage05.png", alt: 'Image 2' } },
    { description: { title: "Family Organizer for mobile", link1: "https://github.com/Citrom333/OrganizeYourFamily", link2: `${this.backendUrl}/download`, about: "I used Capacitor framework by Ionic to make a mobile Native mobile application of my webapp. You can download it by clicking the link." }, image: { src: "../../assets/projectpics/projectimage14.png", alt: 'Image 4' } },
    { description: { title: "Assembly workshop", link1: "https://github.com/Citrom333/RepairApp", link2: "", about: "I started this pet project to learn and practice Java. Is is an app for an assembly workshop, where the repairmen can handle repair history of the vehicles, and also get in contact with the shops. The backend is created with JAVA Spring Boot, the frontend is with React Vite (Javascript). I used MSSQL for the database. The application is running for docker compose." }, image: { src: "../../assets/projectpics/projectimage01.png", alt: 'Image 1' } },
    { description: { title: "El proyecte grande", link1: "https://github.com/Citrom333/ElProyecteGrandeSpeedy", link2: "", about: "This project is a teamwork. It was a four-sprint-long project. This app was made for a transport company, for sending order details to drivers. The backend is in C#, using the ASP.Net framework, while the frontend is in JavaScript, where we utilized React with Vite. The database is in MsSql. I was involved in both the backend and frontend development. The dockerization was entirely done by me." }, image: { src: "../../assets/projectpics/projectimage11.png", alt: 'Image 3' } },
    { description: { title: "Portfoliopage", link1: "https://github.com/Citrom333/portfoliopage", link2: "", about: "You are here. This application was created with Express.js on the backend and Angular with Typescript on the frontend." }, image: { src: "../../assets/projectpics/projectimage15.png", alt: 'Image 5' } },
  ];
}
