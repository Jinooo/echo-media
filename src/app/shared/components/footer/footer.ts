import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  protected readonly currentYear = new Date().getFullYear();

  protected readonly socialLinks = [
    { label: 'Xiaohongshu', href: 'https://www.xiaohongshu.com/user/echomedia' },
    { label: 'Bilibili', href: 'https://space.bilibili.com/echomedia' },
    { label: 'WeChat', href: '#', text: 'EchoMedia' },
    { label: 'Email', href: 'mailto:hello@echomedia.com', text: 'hello@echomedia.com' },
  ];

  protected readonly navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Works', path: '/works' },
    { label: 'Team', path: '/team' },
    { label: 'Contact', path: '/contact' },
  ];
}
