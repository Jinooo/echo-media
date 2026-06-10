import { Component, inject, computed, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { LangService } from '../../../core/services/lang.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
  imports: [RouterLink, TranslatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  private readonly lang = inject(LangService);

  protected readonly currentYear = new Date().getFullYear();

  protected readonly socialLinks = [
    { label: 'Xiaohongshu', href: 'https://www.xiaohongshu.com/user/echomedia' },
    { label: 'Bilibili', href: 'https://space.bilibili.com/echomedia' },
    { label: 'WeChat', href: '#', text: 'EchoMedia' },
    { label: 'Email', href: 'mailto:hello@echomedia.com', text: 'hello@echomedia.com' },
  ];

  protected readonly navLinks = computed(() => [
    { label: 'Home', path: '/' },
    { label: this.lang.translate('nav.works'), path: '/works' },
    { label: this.lang.translate('nav.team'), path: '/team' },
    { label: this.lang.translate('nav.contact'), path: '/contact' },
  ]);

  protected readonly copyrightText = computed(() =>
    this.lang.translate('footer.copyright').replace('{year}', String(this.currentYear)),
  );
}
