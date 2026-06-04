// ============================================
// Echo Media - Mock Data: Services
// ============================================

import type { Service } from '../models';

export const MOCK_SERVICES: readonly Service[] = [
  {
    id: 'creative-development',
    title: 'Creative Development',
    description:
      'From concept to script, we craft compelling narratives that resonate with audiences. Our creative team develops unique visual languages for every project.',
    icon: '💡',
  },
  {
    id: 'production',
    title: 'Production',
    description:
      'Full-service production with state-of-the-art equipment and experienced crews. We handle everything from location scouting to principal photography.',
    icon: '🎬',
  },
  {
    id: 'post-production',
    title: 'Post Production',
    description:
      'Expert editing, color grading, sound design, and VFX. Our post team transforms raw footage into polished, emotionally impactful final products.',
    icon: '✂️',
  },
  {
    id: 'talent-collaboration',
    title: 'Talent Collaboration',
    description:
      'Access to a curated network of directors, DPs, editors, and artists. We match the right creative talent to each unique project vision.',
    icon: '🤝',
  },
  {
    id: 'virtual-production',
    title: 'Virtual Production',
    description:
      'Cutting-edge LED volume stages and real-time rendering with Unreal Engine. Create immersive worlds and achieve in-camera final pixels.',
    icon: '🌐',
  },
];
