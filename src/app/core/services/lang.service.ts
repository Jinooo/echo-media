// ============================================
// Echo Media - Language Service
// ============================================

import { Injectable, inject, signal, Injector, runInInjectionContext } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TRANSLATIONS, type Lang } from '../i18n/translations';

const STORAGE_KEY = 'echo-media-lang';

@Injectable({ providedIn: 'root' })
export class LangService {
  private readonly document = inject(DOCUMENT);
  private readonly injector = inject(Injector);

  readonly currentLang = signal<Lang>(this.loadStoredLang());

  translate(key: string): string {
    const dict = TRANSLATIONS[this.currentLang()];
    return dict[key] ?? key;
  }

  setLang(lang: Lang): void {
    this.currentLang.set(lang);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, lang);
    }
    this.document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  }

  private loadStoredLang(): Lang {
    if (typeof localStorage !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'zh' || stored === 'en') {
        return stored;
      }
    }
    return 'en';
  }
}
