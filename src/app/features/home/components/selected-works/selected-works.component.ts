import { Component, inject, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MOCK_WORKS, WORK_CATEGORIES } from '../../../../core/services/mock-works.data';
import type { WorkCategory } from '../../../../core/models';

@Component({
  selector: 'app-selected-works',
  templateUrl: './selected-works.component.html',
  styleUrls: ['./selected-works.component.scss'],
  imports: [RouterLink],
})
export class SelectedWorksComponent {
  protected readonly activeFilter = signal<WorkCategory | 'all'>('all');
  protected readonly WORK_CATEGORIES = WORK_CATEGORIES;

  protected readonly allWorks = MOCK_WORKS.filter(w => w.featured);

  protected readonly categories: Array<{ key: WorkCategory | 'all'; label: string }> = [
    { key: 'all', label: 'All' },
    ...Object.entries(WORK_CATEGORIES).map(([key, label]) => ({ key: key as WorkCategory, label })),
  ];

  protected readonly filteredWorks = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'all') return this.allWorks;
    return this.allWorks.filter(w => w.category === filter);
  });

  protected setFilter(key: WorkCategory | 'all'): void {
    this.activeFilter.set(key);
  }
}
