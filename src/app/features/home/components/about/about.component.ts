import { Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutSectionComponent {
  protected readonly categories = ['Film', 'Commercial', 'Music Video', 'Documentary', 'Virtual Production'];

  protected readonly schools = ['USC', 'UCL', 'Columbia'];

  protected readonly stats = [
    { value: '2020', label: 'Founded' },
    { value: '200+', label: 'Projects' },
    { value: '50+', label: 'Clients' },
    { value: '15+', label: 'Awards' },
  ];
}
