import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import type { ContactFormData } from '../../../../core/models';

@Component({
  selector: 'app-contact-cta',
  templateUrl: './contact-cta.component.html',
  styleUrls: ['./contact-cta.component.scss'],
  imports: [ReactiveFormsModule],
})
export class ContactCtaComponent {
  protected readonly submitted = signal(false);

  protected readonly socialLinks = [
    { label: 'Email', href: 'mailto:hello@echomedia.com', icon: '✉️', text: 'hello@echomedia.com' },
    { label: 'WeChat', href: '#', icon: '💬', text: 'EchoMedia' },
    { label: 'Xiaohongshu', href: 'https://www.xiaohongshu.com/user/echomedia', icon: '📕', text: '@EchoMedia' },
    { label: 'Bilibili', href: 'https://space.bilibili.com/echomedia', icon: '📺', text: '@EchoMedia' },
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

  get name() { return this.form.get('name')!; }
  get email() { return this.form.get('email')!; }
  get message() { return this.form.get('message')!; }

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
