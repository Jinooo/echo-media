import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSectionComponent {
  categories = ['Film', 'Commercial', 'Music Video', 'Documentary', 'Virtual Production'];
  schools = ['USC', 'UCL', 'Columbia'];
  stats = [
    { value: '2020', label: 'Founded' },
    { value: '200+', label: 'Projects' },
    { value: '50+', label: 'Clients' },
    { value: '15+', label: 'Awards' },
  ];
}
