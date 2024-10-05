import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  standalone: true,
  selector: 'hero-section-component',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent {
  isPlaying = true;
  isMuted = true;

  togglePlay() {
    const video = document.getElementById('hero-video') as HTMLVideoElement;
    this.isPlaying ? video.pause() : video.play();
    this.isPlaying = !this.isPlaying;
  }

  toggleMute() {
    const video = document.getElementById('hero-video') as HTMLVideoElement;
    video.muted = !this.isMuted;
    this.isMuted = !this.isMuted;
  }
}

