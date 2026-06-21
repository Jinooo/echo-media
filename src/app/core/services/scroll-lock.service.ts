// ============================================
// Echo Media - Scroll Lock Service
// ============================================

import { Injectable, inject, Renderer2, RendererFactory2 } from '@angular/core';

/**
 * Centralized scroll lock management.
 * Prevents race conditions when multiple components
 * (header mobile nav, team drawer) lock scrolling simultaneously.
 */
@Injectable({ providedIn: 'root' })
export class ScrollLockService {
  private readonly renderer: Renderer2;
  private lockedBy = new Set<string>();

  constructor() {
    const factory = inject(RendererFactory2);
    this.renderer = factory.createRenderer(null, null);
  }

  /** Lock body scroll. Pass a unique ID so the lock can be released independently. */
  lock(id: string): void {
    this.lockedBy.add(id);
    this.applyLock();
  }

  /** Release the lock for the given ID. Scroll is restored only when ALL locks are released. */
  unlock(id: string): void {
    this.lockedBy.delete(id);
    this.applyLock();
  }

  /** Check if any lock is active */
  isLocked(): boolean {
    return this.lockedBy.size > 0;
  }

  private applyLock(): void {
    if (this.lockedBy.size > 0) {
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    } else {
      this.renderer.removeStyle(document.body, 'overflow');
    }
  }
}
