// ============================================
// Echo Media - Translate Pipe
// ============================================

import { Pipe, PipeTransform, inject, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { LangService } from '../../core/services/lang.service';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false,
})
export class TranslatePipe implements PipeTransform, OnDestroy {
  private readonly lang = inject(LangService);
  private readonly cdr = inject(ChangeDetectorRef);

  transform(key: string): string {
    return this.lang.translate(key);
  }

  ngOnDestroy(): void {
    // Cleanup handled by Angular
  }
}
