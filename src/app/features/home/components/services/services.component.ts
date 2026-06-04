import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MOCK_SERVICES } from '../../../../core/services/mock-services.data';

@Component({
  selector: 'app-services-section',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesSectionComponent {
  services = MOCK_SERVICES;
}
