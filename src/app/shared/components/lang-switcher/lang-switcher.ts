// ============================================
// Echo Media - Language Switcher Component
// ============================================

import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
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

  protected readonly currentLang = this.langService.currentLang.asReadonly();

  protected readonly options: Array<{ key: Lang; label: string }> = [
    { key: 'en', label: 'EN' },
    { key: 'zh', label: '中文' },
  ];

  protected switchLang(key: Lang): void {
    this.langService.setLang(key);
  }
}
