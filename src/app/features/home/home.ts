import { Component, inject, OnInit } from '@angular/core';
import { HeroSectionComponent } from './components/hero/hero.component';
import { AboutSectionComponent } from './components/about/about.component';
import { SelectedWorksComponent } from './components/selected-works/selected-works.component';
import { ServicesSectionComponent } from './components/services/services.component';
import { ClientsSectionComponent } from './components/clients/clients.component';
import { ContactCtaComponent } from './components/contact-cta/contact-cta.component';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  imports: [
    HeroSectionComponent,
    AboutSectionComponent,
    SelectedWorksComponent,
    ServicesSectionComponent,
    ClientsSectionComponent,
    ContactCtaComponent,
  ],
})
export class HomeComponent implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.setMetadata({
      title: 'Echo Media',
      description:
        'Echo Media is a creative production studio specializing in film, commercial, music video, documentary, and virtual production. Tell The World Your Story.',
      type: 'website',
      keywords: ['film production', 'commercial', 'music video', 'documentary', 'virtual production', 'creative studio'],
    });
  }
}
