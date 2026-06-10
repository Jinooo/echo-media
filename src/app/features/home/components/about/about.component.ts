import { ChangeDetectionStrategy, Component, inject, computed } from '@angular/core';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';
import { LangService } from '../../../../core/services/lang.service';

@Component({
  selector: 'app-about-section',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [TranslatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSectionComponent {
  private readonly lang = inject(LangService);

  categories = ['Film', 'Commercial', 'Music Video', 'Documentary', 'Virtual Production'];
  schools = ['USC', 'UCL', 'Columbia'];

  stats = computed(() => [
    { value: '2020', label: this.lang.translate('about.statFounded') },
    { value: '200+', label: this.lang.translate('about.statProjects') },
    { value: '50+', label: this.lang.translate('about.statClients') },
    { value: '15+', label: this.lang.translate('about.statAwards') },
  ]);
}
