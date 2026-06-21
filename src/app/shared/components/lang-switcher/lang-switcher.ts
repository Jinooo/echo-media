// ============================================
// Echo Media - Language Switcher Component
// ============================================

import { Component, HostListener, inject, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { LangService } from '../../../core/services/lang.service';
import type { Lang } from '../../../core/i18n/translations';

@Component({
  selector: 'app-lang-switcher',
  templateUrl: './lang-switcher.html',
  styleUrls: ['./lang-switcher.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LangSwitcherComponent {
  private readonly langService = inject(LangService);
  private readonly elementRef = inject(ElementRef);

  protected readonly currentLang = this.langService.currentLang.asReadonly();

  protected readonly options: Array<{ key: Lang; label: string }> = [
    { key: 'en', label: 'EN' },
    { key: 'zh', label: '中文' },
  ];

  protected switchLang(key: Lang): void {
    this.langService.setLang(key);
  }

  @HostListener('keydown', ['$event'])
  protected onKeyDown(event: KeyboardEvent): void {
    const target = event.target as HTMLElement;
    if (!target.classList.contains('lang-switcher__btn')) {
      return;
    }

    const currentIndex = this.options.findIndex(
      opt => opt.key === this.currentLang()
    );
    let nextIndex: number | null = null;

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      nextIndex = (currentIndex + 1) % this.options.length;
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      nextIndex = (currentIndex - 1 + this.options.length) % this.options.length;
    }

    if (nextIndex !== null && nextIndex !== currentIndex) {
      event.preventDefault();
      const nextLang = this.options[nextIndex].key;
      this.langService.setLang(nextLang);

      // Move focus to the newly selected button
      const buttons = this.elementRef.nativeElement.querySelectorAll('.lang-switcher__btn');
      (buttons[nextIndex] as HTMLElement)?.focus();
    }
  }
}
