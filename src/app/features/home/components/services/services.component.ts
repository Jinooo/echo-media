import { Component } from '@angular/core';
import { MOCK_SERVICES } from '../../../../core/services/mock-services.data';

@Component({
  selector: 'app-services-section',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesSectionComponent {
  protected readonly services = MOCK_SERVICES;
}
