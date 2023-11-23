import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.scss',
  imports: [SlickCarouselModule, CommonModule],
})
export class ImageSliderComponent {
  images = [
    { url: "../../assets/projectpics/projectimage01.png", alt: 'Image 1' },
    { url: "../../assets/projectpics/projectimage02.png", alt: 'Image 2' },
    { url: "../../assets/projectpics/projectimage03.png", alt: 'Image 3' },
    { url: "../../assets/projectpics/projectimage04.png", alt: 'Image 4' },
    { url: "../../assets/projectpics/projectimage05.png", alt: 'Image 5' },
    { url: "../../assets/projectpics/projectimage06.png", alt: 'Image 6' },
    { url: "../../assets/projectpics/projectimage07.png", alt: 'Image 7' },
    { url: "../../assets/projectpics/projectimage08.png", alt: 'Image 8' },
    { url: "../../assets/projectpics/projectimage09.png", alt: 'Image 9' },
    { url: "../../assets/projectpics/projectimage10.png", alt: 'Image 10' },
    { url: "../../assets/projectpics/projectimage11.png", alt: 'Image 11' },
    { url: "../../assets/projectpics/projectimage12.png", alt: 'Image 12' },
    { url: "../../assets/projectpics/projectimage13.png", alt: 'Image 13' },

  ];

  sliderConfig = {
    // "slidesToShow": 4, "slidesToScroll": 4
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
  };

}


