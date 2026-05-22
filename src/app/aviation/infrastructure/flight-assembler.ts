import {Flight} from '../domain/model/flight.entity';
import {FlightResource, FlightsResponse} from './flights-response';

export class FlightAssembler {

  toEntityFromResource(resource: FlightResource): Flight {
    return new Flight({
      flightNumber: resource.flight?.iata ?? '',
      airlineName: resource.airline?.name ?? '',
      departureAirport: resource.departure?.airport ?? '',
      arrivalAirport: resource.arrival?.airport ?? '',
      flightStatus: resource.flight_status ?? ''
    });
  }

  toEntitiesFromResponse(response: FlightsResponse): Flight[] {
    if (!response?.data) return [];
    return response.data
      .filter(resource => !!resource.flight?.iata)
      .map(resource => this.toEntityFromResource(resource));
  }
}
