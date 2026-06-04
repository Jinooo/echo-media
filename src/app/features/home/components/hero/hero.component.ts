import { Component, HostListener, signal, inject, ChangeDetectionStrategy, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {
  private readonly platformId = inject(PLATFORM_ID);

  protected readonly parallaxY = signal(0);
  protected readonly isLoaded = signal(false);

  protected readonly brandLogos = ['BMW', 'Nestlé', 'Bvlgari', 'miHoYo', 'Jeep'];

  @HostListener('window:scroll')
  onScroll(): void {
    this.parallaxY.set(window.scrollY * 0.2);
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      requestAnimationFrame(() => this.isLoaded.set(true));
    } else {
      this.isLoaded.set(true);
    }
  }
}
