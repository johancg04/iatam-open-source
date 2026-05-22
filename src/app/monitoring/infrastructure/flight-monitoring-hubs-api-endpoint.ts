import { HttpClient } from '@angular/common/http';
import { BaseApiEndpoint } from '../../shared/infrastructure/base-api-endpoint';
import { FlightMonitoringHub } from '../domain/model/flight-monitoring-hub.entity';
import { FlightMonitoringHubResource, FlightMonitoringHubsResponse } from './flight-monitoring-hubs-response';
import { FlightMonitoringHubAssembler } from './flight-monitoring-hub-assembler';
import { environment } from '../../../environments/environment';

export class FlightMonitoringHubsApiEndpoint extends BaseApiEndpoint<
  FlightMonitoringHub,
  FlightMonitoringHubResource,
  FlightMonitoringHubsResponse,
  FlightMonitoringHubAssembler
> {
  constructor(http: HttpClient) {
    super(
      http,
      `${environment.platformProviderBaseUrl}${environment.platformProviderMonitoringEndpointPath}`,
      new FlightMonitoringHubAssembler()
    );
  }
}
