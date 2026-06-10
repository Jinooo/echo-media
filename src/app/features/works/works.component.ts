import { Component, inject, signal, computed, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { FormsModule } from '@angular/forms';
import { MOCK_WORKS, WORK_CATEGORIES } from '../../core/services/mock-works.data';
import { SeoService } from '../../core/services/seo.service';
import { LangService } from '../../core/services/lang.service';
import type { WorkCategory } from '../../core/models';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
  imports: [RouterLink, FormsModule, TranslatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorksComponent implements OnInit {
  private seo = inject(SeoService);
  private lang = inject(LangService);

  protected WORK_CATEGORIES = WORK_CATEGORIES;
  protected allWorks = MOCK_WORKS;

  protected activeFilter = signal<WorkCategory | 'all'>('all');
  protected searchQuery = signal('');
  protected currentPage = signal(1);
  protected pageSize = 6;

  protected categories = computed(() => [
    { key: 'all' as const, label: this.lang.translate('selectedWorks.all') },
    ...Object.entries(WORK_CATEGORIES).map(([key, label]) => ({ key: key as WorkCategory, label })),
  ]);

  protected filteredWorks = computed(() => {
    let works = this.allWorks;
    const filter = this.activeFilter();
    const search = this.searchQuery().toLowerCase().trim();

    if (filter !== 'all') {
      works = works.filter(w => w.category === filter);
    }

    if (search) {
      works = works.filter(
        w =>
          w.title.toLowerCase().includes(search) ||
          w.client.toLowerCase().includes(search) ||
          w.description.toLowerCase().includes(search)
      );
    }

    return works;
  });

  protected totalPages = computed(() =>
    Math.max(1, Math.ceil(this.filteredWorks().length / this.pageSize))
  );

  protected paginatedWorks = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize;
    return this.filteredWorks().slice(start, start + this.pageSize);
  });

  protected pages = computed(() => {
    const total = this.totalPages();
    const pages: number[] = [];
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
    return pages;
  });

  ngOnInit(): void {
    this.seo.setMetadata({
      title: this.lang.translate('works.title'),
      description: this.lang.translate('works.subtitle'),
      type: 'website',
    });
  }

  protected setFilter(key: WorkCategory | 'all'): void {
    this.activeFilter.set(key);
    this.currentPage.set(1);
  }

  protected setPage(page: number): void {
    this.currentPage.set(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
