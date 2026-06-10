import { Component, inject, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MOCK_WORKS, WORK_CATEGORIES } from '../../../../core/services/mock-works.data';
import type { WorkCategory } from '../../../../core/models';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';
import { LangService } from '../../../../core/services/lang.service';

@Component({
  selector: 'app-selected-works',
  templateUrl: './selected-works.component.html',
  styleUrls: ['./selected-works.component.scss'],
  imports: [RouterLink, TranslatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectedWorksComponent {
  private readonly lang = inject(LangService);

  protected readonly WORK_CATEGORIES = WORK_CATEGORIES;

  protected readonly allWorks = MOCK_WORKS.filter(w => w.featured);

  protected readonly categories = computed(() => [
    { key: 'all' as const, label: this.lang.translate('selectedWorks.all') },
    ...Object.entries(WORK_CATEGORIES).map(([key, label]) => ({ key: key as WorkCategory, label })),
  ]);

  protected activeFilter = signal<WorkCategory | 'all'>('all');

  protected filteredWorks = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'all') return this.allWorks;
    return this.allWorks.filter(w => w.category === filter);
  });

  protected setFilter(key: WorkCategory | 'all'): void {
    this.activeFilter.set(key);
  }
}
