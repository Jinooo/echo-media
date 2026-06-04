import { Component } from '@angular/core';
import { MOCK_CLIENTS } from '../../../../core/services/mock-clients.data';

@Component({
  selector: 'app-clients-section',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsSectionComponent {
  protected readonly clients = MOCK_CLIENTS;
}
