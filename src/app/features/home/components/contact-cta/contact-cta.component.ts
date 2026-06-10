import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import type { ContactFormData } from '../../../../core/models';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';
import { LangService } from '../../../../core/services/lang.service';

interface ContactForm {
  name: FormControl<string>;
  company: FormControl<string>;
  email: FormControl<string>;
  message: FormControl<string>;
}

@Component({
  selector: 'app-contact-cta',
  templateUrl: './contact-cta.component.html',
  styleUrls: ['./contact-cta.component.scss'],
  imports: [ReactiveFormsModule, TranslatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactCtaComponent {
  private readonly fb = inject(FormBuilder);
  protected readonly lang = inject(LangService);

  protected readonly submitted = signal(false);

  protected readonly socialLinks = [
    { label: 'Email', href: 'mailto:hello@echomedia.com', text: 'hello@echomedia.com' },
    { label: 'WeChat', href: '#', text: 'EchoMedia' },
    { label: 'Xiaohongshu', href: 'https://www.xiaohongshu.com/user/echomedia', text: '@EchoMedia' },
    { label: 'Bilibili', href: 'https://space.bilibili.com/echomedia', text: '@EchoMedia' },
  ];

  protected readonly form: FormGroup<ContactForm> = this.fb.nonNullable.group({
    name: ['', [Validators.required]],
    company: [''],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  protected get name(): FormControl<string> {
    return this.form.controls.name;
  }

  protected get email(): FormControl<string> {
    return this.form.controls.email;
  }

  protected get message(): FormControl<string> {
    return this.form.controls.message;
  }

  protected onSubmit(): void {
    if (this.form.valid) {
      const formData: ContactFormData = this.form.getRawValue();
      console.log('Contact form submitted:', formData);
      this.submitted.set(true);
      this.form.reset();
    } else {
      this.form.markAllAsTouched();
    }
  }
}
