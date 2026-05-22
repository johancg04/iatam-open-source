import { Routes } from '@angular/router';

const newFlightRecord = () =>
  import('./views/new-flight-record/new-flight-record').then(m => m.NewFlightRecord);

export const monitoringRoutes: Routes = [
  {
    path: 'flight-records/new',
    loadComponent: newFlightRecord,
    title: 'IATA Flight Monitoring Platform - New Flight Record'
  }
];
