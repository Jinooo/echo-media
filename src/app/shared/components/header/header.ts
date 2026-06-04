import { Component, signal, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  imports: [RouterLink, RouterLinkActive],
  host: {
    '[class.is-scrolled]': 'isScrolled()',
    '[class.is-menu-open]': 'isMenuOpen()',
  },
})
export class HeaderComponent {
  protected readonly isScrolled = signal(false);
  protected readonly isMenuOpen = signal(false);

  protected readonly navLinks = [
    { path: '/works', label: 'Works' },
    { path: '/team', label: 'Team' },
    { path: '/contact', label: 'Contact' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 40);
  }

  protected toggleMenu(): void {
    this.isMenuOpen.update(v => !v);
    document.body.style.overflow = this.isMenuOpen() ? 'hidden' : '';
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
    document.body.style.overflow = '';
  }
}
