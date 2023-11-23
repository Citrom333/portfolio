import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ImageSliderComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
