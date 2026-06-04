import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
  imports: [RouterLink],
})
export class FooterComponent {
  protected readonly currentYear = new Date().getFullYear();

  protected readonly socialLinks = [
    { label: 'Xiaohongshu', href: 'https://www.xiaohongshu.com/user/echomedia', icon: '📕' },
    { label: 'Bilibili', href: 'https://space.bilibili.com/echomedia', icon: '📺' },
    { label: 'WeChat', href: '#', icon: '💬' },
    { label: 'Email', href: 'mailto:hello@echomedia.com', icon: '✉️' },
  ];

  protected readonly navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Works', path: '/works' },
    { label: 'Team', path: '/team' },
    { label: 'Contact', path: '/contact' },
  ];
}
