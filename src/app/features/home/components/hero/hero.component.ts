import { Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  imports: [RouterLink],
})
export class HeroSectionComponent {
  protected readonly parallaxY = signal(0);

  protected readonly brandLogos = ['BMW', 'Nestlé', 'Bvlgari'];

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollY = window.scrollY;
    this.parallaxY.set(scrollY * 0.35);
  }
}
