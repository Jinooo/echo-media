import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MOCK_CLIENTS } from '../../../../core/services/mock-clients.data';

@Component({
  selector: 'app-clients-section',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsSectionComponent {
  protected clients = MOCK_CLIENTS;
}
