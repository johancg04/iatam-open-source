import { Routes } from '@angular/router';
import { Home } from './shared/presentation/views/home/home';

const pageNotFound = () =>
  import('./shared/presentation/views/page-not-found/page-not-found').then(m => m.PageNotFound);
const monitoringRoutes = () =>
  import('./monitoring/presentation/monitoring.routes').then(m => m.monitoringRoutes);

const baseTitle = 'IATA Flight Monitoring Platform';

export const routes: Routes = [
  { path: 'home',       component: Home,                  title: `${baseTitle} - Home` },
  { path: '',           redirectTo: '/home', pathMatch: 'full' },
  { path: '',           loadChildren: monitoringRoutes },
  { path: '**',         loadComponent: pageNotFound,      title: `${baseTitle} - Page Not Found` }
];
