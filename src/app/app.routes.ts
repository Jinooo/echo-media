import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home').then(m => m.HomeComponent),
  },
  {
    path: 'works',
    loadComponent: () =>
      import('./features/works/works.component').then(m => m.WorksComponent),
  },
  {
    path: 'works/:slug',
    loadComponent: () =>
      import('./features/work-detail/work-detail.component').then(m => m.WorkDetailComponent),
  },
  {
    path: 'team',
    loadComponent: () =>
      import('./features/team/team.component').then(m => m.TeamComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact.component').then(m => m.ContactComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
