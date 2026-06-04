// ============================================
// Echo Media - Mock Data: Team
// ============================================

import type { TeamMember } from '../models';

export const MOCK_TEAM: readonly TeamMember[] = [
  {
    id: 'alex-chen',
    name: 'Alex Chen',
    role: 'Founder & Creative Director',
    bio: 'Award-winning filmmaker with a passion for visual storytelling. Alex founded Echo Media in 2020 with a vision to bridge the gap between traditional filmmaking and cutting-edge technology.',
    experience: 'USC School of Cinematic Arts · 12+ years in film & commercial production · Cannes Lions winner',
    photo: '/assets/images/team/alex-chen.jpg',
    category: 'founder',
  },
  {
    id: 'maria-santos',
    name: 'Maria Santos',
    role: 'Head of Production',
    bio: 'Maria brings over a decade of production management experience, ensuring every project runs seamlessly from concept to delivery.',
    experience: 'UCL Film Studies · Previously at A24 · Produced 50+ commercials',
    photo: '/assets/images/team/maria-santos.jpg',
    category: 'core',
  },
  {
    id: 'james-wright',
    name: 'James Wright',
    role: 'Post Production Lead',
    bio: 'A master of the edit suite who transforms raw footage into compelling narratives. James leads our post-production team with precision and creativity.',
    experience: 'Columbia University · Expert in DaVinci Resolve & Avid · Edited 3 feature films',
    photo: '/assets/images/team/james-wright.jpg',
    category: 'core',
  },
  {
    id: 'luna-park',
    name: 'Luna Park',
    role: 'Colorist & Visual Artist',
    bio: 'Luna\'s color grading transforms every frame into a work of art. Her keen eye for color theory and texture brings depth and emotion to every project.',
    experience: 'USC Roski School of Art · Baselight & DaVinci Resolve specialist',
    photo: '/assets/images/team/luna-park.jpg',
    category: 'core',
  },
  {
    id: 'michael-torres',
    name: 'Michael Torres',
    role: 'CGI & VFX Director',
    bio: 'Pushing the boundaries of what\'s possible with virtual production and CGI. Michael leads our most technically ambitious projects.',
    experience: '10+ years in VFX · Unreal Engine Fellow · Worked at Buck Studio',
    photo: '/assets/images/team/michael-torres.jpg',
    category: 'core',
  },
  {
    id: 'yuki-tanaka',
    name: 'Yuki Tanaka',
    role: 'Documentary Director',
    bio: 'Yuki brings authentic human stories to life. Her documentary work has been featured at international film festivals worldwide.',
    experience: 'Columbia Journalism School · Sundance Fellow · 8 documentaries produced',
    photo: '/assets/images/team/yuki-tanaka.jpg',
    category: 'collaborator',
  },
  {
    id: 'sarah-kim',
    name: 'Sarah Kim',
    role: 'Cinematographer',
    bio: 'Sarah views light as her primary language. Her cinematography blends technical mastery with an intuitive understanding of visual poetry.',
    experience: 'AFI Conservatory · ARRI certified · Shot for Apple, Nike, BMW',
    photo: '/assets/images/team/sarah-kim.jpg',
    category: 'collaborator',
  },
];
