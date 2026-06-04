import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MOCK_WORKS, WORK_CATEGORIES } from '../../core/services/mock-works.data';
import { SeoService } from '../../core/services/seo.service';
import type { Work } from '../../core/models';

@Component({
  selector: 'app-work-detail',
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.scss'],
  imports: [RouterLink],
})
export class WorkDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);

  protected readonly WORK_CATEGORIES = WORK_CATEGORIES;
  protected readonly work = signal<Work | null>(null);
  protected readonly notFound = signal(false);

  protected readonly nextWork = computed(() => {
    const current = this.work();
    if (!current) return null;
    const idx = MOCK_WORKS.findIndex(w => w.slug === current.slug);
    return MOCK_WORKS[idx + 1] ?? MOCK_WORKS[0] ?? null;
  });

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    const found = MOCK_WORKS.find(w => w.slug === slug);

    if (found) {
      this.work.set(found);
      this.seo.setMetadata({
        title: found.title,
        description: found.description,
        type: 'article',
        keywords: [found.category, found.client],
      });
    } else {
      this.notFound.set(true);
    }
  }
}
