import { Component, inject, signal, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { SeoService } from '../../core/services/seo.service';
import { LangService } from '../../core/services/lang.service';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import type { ContactFormData } from '../../core/models';
import { CONTACT_SOCIAL_LINKS } from '../../core/models';

interface ContactForm {
  name: FormControl<string>;
  company: FormControl<string>;
  email: FormControl<string>;
  message: FormControl<string>;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [ReactiveFormsModule, TranslatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent implements OnInit {
  private readonly seo = inject(SeoService);
  private readonly lang = inject(LangService);
  private readonly fb = inject(FormBuilder);

  protected readonly submitted = signal(false);
  protected readonly isSubmitting = signal(false);

  protected readonly socialLinks = CONTACT_SOCIAL_LINKS;

  protected readonly form: FormGroup<ContactForm> = this.fb.nonNullable.group({
    name: ['', [Validators.required]],
    company: [''],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  protected get name() { return this.form.controls.name; }
  protected get email() { return this.form.controls.email; }
  protected get message() { return this.form.controls.message; }

  ngOnInit(): void {
    this.seo.setMetadata({
      title: this.lang.translate('contact.title'),
      description: this.lang.translate('contact.subtitle'),
      type: 'website',
    });
  }

  protected onSubmit(): void {
    if (this.form.valid && !this.isSubmitting()) {
      this.isSubmitting.set(true);
      const formData: ContactFormData = this.form.getRawValue();
      console.log('Contact form submitted:', formData);
      // Simulate async submission — replace with real API call
      setTimeout(() => {
        this.submitted.set(true);
        this.isSubmitting.set(false);
        this.form.reset();
      }, 1000);
    } else if (!this.form.valid) {
      this.form.markAllAsTouched();
    }
  }
}
