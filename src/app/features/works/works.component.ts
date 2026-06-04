import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MOCK_WORKS, WORK_CATEGORIES } from '../../core/services/mock-works.data';
import { SeoService } from '../../core/services/seo.service';
import type { WorkCategory } from '../../core/models';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
  imports: [RouterLink, FormsModule],
})
export class WorksComponent implements OnInit {
  private readonly seo = inject(SeoService);

  protected readonly WORK_CATEGORIES = WORK_CATEGORIES;
  protected readonly allWorks = MOCK_WORKS;

  protected readonly activeFilter = signal<WorkCategory | 'all'>('all');
  protected readonly searchQuery = signal('');
  protected readonly currentPage = signal(1);
  protected readonly pageSize = 6;

  protected readonly categories: Array<{ key: WorkCategory | 'all'; label: string }> = [
    { key: 'all', label: 'All' },
    ...Object.entries(WORK_CATEGORIES).map(([key, label]) => ({ key: key as WorkCategory, label })),
  ];

  protected readonly filteredWorks = computed(() => {
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

  protected readonly totalPages = computed(() =>
    Math.max(1, Math.ceil(this.filteredWorks().length / this.pageSize))
  );

  protected readonly paginatedWorks = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize;
    return this.filteredWorks().slice(start, start + this.pageSize);
  });

  protected readonly pages = computed(() => {
    const total = this.totalPages();
    const current = this.currentPage();
    const pages: number[] = [];
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
    return pages;
  });

  ngOnInit(): void {
    this.seo.setMetadata({
      title: 'Works',
      description:
        'Explore our portfolio of film, commercial, music video, documentary, and virtual production projects.',
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
