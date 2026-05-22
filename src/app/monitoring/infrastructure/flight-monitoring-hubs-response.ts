import { BaseResource, BaseResponse } from '../../shared/infrastructure/base-response';

export interface FlightMonitoringHubResource extends BaseResource {
  id: number;
  name: string;
  regionCode: string;
}

export interface FlightMonitoringHubsResponse extends BaseResponse {
  hubs?: FlightMonitoringHubResource[];
}
