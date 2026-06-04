import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { MOCK_TEAM } from '../../core/services/mock-team.data';
import { SeoService } from '../../core/services/seo.service';
import type { TeamMember } from '../../core/models';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  private readonly seo = inject(SeoService);

  protected readonly selectedMember = signal<TeamMember | null>(null);

  protected readonly founders = computed(() =>
    MOCK_TEAM.filter(m => m.category === 'founder')
  );

  protected readonly coreTeam = computed(() =>
    MOCK_TEAM.filter(m => m.category === 'core')
  );

  protected readonly collaborators = computed(() =>
    MOCK_TEAM.filter(m => m.category === 'collaborator')
  );

  ngOnInit(): void {
    this.seo.setMetadata({
      title: 'Team',
      description:
        'Meet the talented team behind Echo Media — directors, cinematographers, editors, and visual artists.',
      type: 'website',
    });
  }

  protected openDrawer(member: TeamMember): void {
    this.selectedMember.set(member);
    document.body.style.overflow = 'hidden';
  }

  protected closeDrawer(): void {
    this.selectedMember.set(null);
    document.body.style.overflow = '';
  }
}
