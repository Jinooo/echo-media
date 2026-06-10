import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MOCK_CLIENTS } from '../../../../core/services/mock-clients.data';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-clients-section',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  imports: [TranslatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsSectionComponent {
  protected clients = MOCK_CLIENTS;
}
