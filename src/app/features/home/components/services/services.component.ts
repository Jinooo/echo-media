import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MOCK_SERVICES } from '../../../../core/services/mock-services.data';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-services-section',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  imports: [TranslatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesSectionComponent {
  services = MOCK_SERVICES;
}
