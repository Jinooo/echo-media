import { Component, inject, signal, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SeoService } from '../../core/services/seo.service';
import type { ContactFormData } from '../../core/models';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [ReactiveFormsModule],
})
export class ContactComponent implements OnInit {
  private readonly seo = inject(SeoService);

  protected readonly submitted = signal(false);

  protected readonly socialLinks = [
    {
      label: 'Email',
      href: 'mailto:hello@echomedia.com',
      icon: '✉️',
      text: 'hello@echomedia.com',
    },
    { label: 'WeChat', href: '#', icon: '💬', text: 'EchoMedia' },
    {
      label: 'Xiaohongshu',
      href: 'https://www.xiaohongshu.com/user/echomedia',
      icon: '📕',
      text: '@EchoMedia',
    },
    {
      label: 'Bilibili',
      href: 'https://space.bilibili.com/echomedia',
      icon: '📺',
      text: '@EchoMedia',
    },
  ];

  protected readonly form: FormGroup;

  constructor() {
    const fb = new FormBuilder();
    this.form = fb.group({
      name: ['', [Validators.required]],
      company: ['', []],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get name() {
    return this.form.get('name')!;
  }
  get email() {
    return this.form.get('email')!;
  }
  get message() {
    return this.form.get('message')!;
  }

  ngOnInit(): void {
    this.seo.setMetadata({
      title: 'Contact',
      description:
        'Get in touch with Echo Media. Let\'s create something together — contact us for film, commercial, music video, and virtual production services.',
      type: 'website',
    });
  }

  protected onSubmit(): void {
    if (this.form.valid) {
      const formData: ContactFormData = this.form.value;
      console.log('Contact form submitted:', formData);
      this.submitted.set(true);
      this.form.reset();
    } else {
      this.form.markAllAsTouched();
    }
  }
}
