// ============================================
// Echo Media - SEO Service
// ============================================

import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoMetadata {
  readonly title: string;
  readonly description: string;
  readonly image?: string;
  readonly url?: string;
  readonly type?: 'website' | 'article';
  readonly keywords?: readonly string[];
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);

  private readonly defaultImage = '/assets/images/og-default.jpg';
  private readonly siteName = 'Echo Media';
  private readonly twitterHandle = '@echomedia';

  setMetadata(metadata: SeoMetadata): void {
    const fullTitle = `${metadata.title} | ${this.siteName}`;
    const description = metadata.description;
    const image = metadata.image ?? this.defaultImage;
    const keywords = metadata.keywords ?? [];

    // Title
    this.title.setTitle(fullTitle);

    // Basic Meta
    this.meta.updateTag({ name: 'description', content: description });
    if (keywords.length > 0) {
      this.meta.updateTag({ name: 'keywords', content: keywords.join(', ') });
    }

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:type', content: metadata.type ?? 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: this.siteName });
    if (metadata.url) {
      this.meta.updateTag({ property: 'og:url', content: metadata.url });
    }

    // Twitter Card
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: image });
    this.meta.updateTag({ name: 'twitter:site', content: this.twitterHandle });

    // JSON-LD Structured Data
    this.addJsonLd('Organization', {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: this.siteName,
      description: 'Tell The World Your Story',
      url: metadata.url ?? 'https://echomedia.com',
      sameAs: [
        'https://www.xiaohongshu.com/user/echomedia',
        'https://space.bilibili.com/echomedia',
      ],
    });
  }

  private addJsonLd(id: string, data: Record<string, unknown>): void {
    const existing = this.document.getElementById(`json-ld-${id}`);
    if (existing) {
      existing.remove();
    }
    const script = this.document.createElement('script');
    script.id = `json-ld-${id}`;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    this.document.head.appendChild(script);
  }
}
