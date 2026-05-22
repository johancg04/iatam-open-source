import { BaseResource, BaseResponse } from '../../shared/infrastructure/base-response';

export interface FlightResource extends BaseResource {
  id: number;
  flight: { iata: string };
  airline: { name: string };
  departure: { airport: string };
  arrival: { airport: string };
  flight_status: string;
}

export interface FlightsResponse extends BaseResponse {
  data: FlightResource[];
}
