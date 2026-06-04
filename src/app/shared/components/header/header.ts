import { Component, signal, HostListener, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  imports: [RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.is-scrolled]': 'isScrolled()',
    '[class.is-menu-open]': 'isMenuOpen()',
  },
})
export class HeaderComponent {
  private readonly document = inject(DOCUMENT);

  protected readonly isScrolled = signal(false);
  protected readonly isMenuOpen = signal(false);

  protected readonly navLinks = [
    { path: '/works', label: 'Works' },
    { path: '/team', label: 'Team' },
    { path: '/contact', label: 'Contact' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 60);
  }

  @HostListener('window:keydown.escape')
  onEscape(): void {
    if (this.isMenuOpen()) {
      this.closeMenu();
    }
  }

  protected toggleMenu(): void {
    this.isMenuOpen.update(v => !v);
    this.document.body.style.overflow = this.isMenuOpen() ? 'hidden' : '';
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
    this.document.body.style.overflow = '';
  }
}
