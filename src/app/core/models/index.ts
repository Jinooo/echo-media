// ============================================
// Echo Media - Data Models
// ============================================

/** Categories of creative work */
export type WorkCategory = 'film' | 'commercial' | 'music-video' | 'documentary' | 'virtual-production';

/** A creative work / project */
export interface Work {
  readonly slug: string;
  readonly title: string;
  readonly client: string;
  readonly year: number;
  readonly category: WorkCategory;
  readonly description: string;
  readonly role: string;
  readonly tools: readonly string[];
  readonly coverImage: string;
  readonly heroImage: string;
  readonly gallery: readonly string[];
  readonly videoUrl?: string;
  readonly credits: readonly Credit[];
  readonly featured: boolean;
}

/** A credit entry for a work */
export interface Credit {
  readonly role: string;
  readonly name: string;
}

/** A team member */
export interface TeamMember {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly bio: string;
  readonly experience: string;
  readonly photo: string;
  readonly category: 'founder' | 'core' | 'collaborator';
}

/** A client/brand */
export interface Client {
  readonly id: string;
  readonly name: string;
  readonly logo: string;
}

/** Service offering */
export interface Service {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

/** Contact form data */
export interface ContactFormData {
  readonly name: string;
  readonly company: string;
  readonly email: string;
  readonly message: string;
}

/** Works filter state */
export interface WorksFilter {
  readonly category: WorkCategory | 'all';
  readonly search: string;
  readonly page: number;
  readonly pageSize: number;
}

/** Social media / contact link */
export interface SocialLink {
  readonly label: string;
  readonly href: string;
  readonly text: string;
}

/** Shared social links used across contact forms */
export const CONTACT_SOCIAL_LINKS: readonly SocialLink[] = [
  { label: 'Email', href: 'mailto:hello@echomedia.com', text: 'hello@echomedia.com' },
  { label: 'WeChat', href: '#', text: 'EchoMedia' },
  { label: 'Xiaohongshu', href: 'https://www.xiaohongshu.com/user/echomedia', text: '@EchoMedia' },
  { label: 'Bilibili', href: 'https://space.bilibili.com/echomedia', text: '@EchoMedia' },
];

/** Default validation rules for the contact form */
export const CONTACT_FORM_VALIDATORS = {
  name: { required: true },
  company: {},
  email: { required: true, email: true },
  message: { required: true, minlength: 10 },
} as const;
