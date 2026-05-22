import { BaseResource, BaseResponse } from '../../shared/infrastructure/base-response';

export interface FlightItemResource extends BaseResource {
  id: number;
  hubId: number;
  regionCode: string;
  flightNumber: string;
  airlineName: string;
  departureAirport: string;
  arrivalAirport: string;
  flightStatus: string;
  registeredAt: string;
}

export interface FlightItemsResponse extends BaseResponse {
  items?: FlightItemResource[];
}
