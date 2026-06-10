import { Component, signal, HostListener, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { LangSwitcherComponent } from '../lang-switcher/lang-switcher';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  imports: [RouterLink, RouterLinkActive, LangSwitcherComponent, TranslatePipe],
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
    { path: '/works', labelKey: 'nav.works' },
    { path: '/team', labelKey: 'nav.team' },
    { path: '/contact', labelKey: 'nav.contact' },
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
