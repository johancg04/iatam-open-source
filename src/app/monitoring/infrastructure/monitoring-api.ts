import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApi } from '../../shared/infrastructure/base-api';
import { FlightMonitoringHub } from '../domain/model/flight-monitoring-hub.entity';
import { FlightItem } from '../domain/model/flight-item.entity';
import { FlightMonitoringHubsApiEndpoint } from './flight-monitoring-hubs-api-endpoint';
import { FlightItemsApiEndpoint } from './flight-items-api-endpoint';

@Injectable({ providedIn: 'root' })
export class MonitoringApi extends BaseApi {
  private readonly hubsEndpoint: FlightMonitoringHubsApiEndpoint;
  private readonly itemsEndpoint: FlightItemsApiEndpoint;

  constructor(http: HttpClient) {
    super();
    this.hubsEndpoint = new FlightMonitoringHubsApiEndpoint(http);
    this.itemsEndpoint = new FlightItemsApiEndpoint(http);
  }

  getHubs(): Observable<FlightMonitoringHub[]> {
    return this.hubsEndpoint.getAll();
  }

  getFlightItems(): Observable<FlightItem[]> {
    return this.itemsEndpoint.getAll();
  }

  createFlightItem(item: FlightItem): Observable<FlightItem> {
    return this.itemsEndpoint.create(item);
  }
}
