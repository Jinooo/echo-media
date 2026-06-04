import { Component, inject, signal, computed, OnInit, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MOCK_TEAM } from '../../core/services/mock-team.data';
import { SeoService } from '../../core/services/seo.service';
import type { TeamMember } from '../../core/models';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamComponent implements OnInit {
  private readonly seo = inject(SeoService);
  private readonly document = inject(DOCUMENT);

  protected selectedMember = signal<TeamMember | null>(null);

  protected founders = computed(() =>
    MOCK_TEAM.filter(m => m.category === 'founder')
  );

  protected coreTeam = computed(() =>
    MOCK_TEAM.filter(m => m.category === 'core')
  );

  protected collaborators = computed(() =>
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

  @HostListener('window:keydown.escape')
  protected onEscapeKey(): void {
    this.closeDrawer();
  }

  protected openDrawer(member: TeamMember): void {
    this.selectedMember.set(member);
    this.document.body.style.overflow = 'hidden';
  }

  protected closeDrawer(): void {
    this.selectedMember.set(null);
    this.document.body.style.overflow = '';
  }
}
