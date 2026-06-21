import { Component, HostListener, signal, inject, ChangeDetectionStrategy, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  imports: [RouterLink, TranslatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {
  private readonly platformId = inject(PLATFORM_ID);

  protected readonly parallaxY = signal(0);
  protected readonly isLoaded = signal(false);

  protected readonly brandLogos = ['BMW', 'Nestlé', 'Bvlgari', 'miHoYo', 'Jeep'];

  private rafId = 0;

  @HostListener('window:scroll')
  onScroll(): void {
    if (this.rafId) return;
    this.rafId = requestAnimationFrame(() => {
      this.parallaxY.set(window.scrollY * 0.2);
      this.rafId = 0;
    });
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      requestAnimationFrame(() => this.isLoaded.set(true));
    } else {
      this.isLoaded.set(true);
    }
  }
}
