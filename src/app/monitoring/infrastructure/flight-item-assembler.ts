import { BaseAssembler } from '../../shared/infrastructure/base-assembler';
import { FlightItem } from '../domain/model/flight-item.entity';
import { FlightItemResource, FlightItemsResponse } from './flight-items-response';

export class FlightItemAssembler
  implements BaseAssembler<FlightItem, FlightItemResource, FlightItemsResponse> {

  toEntityFromResource(resource: FlightItemResource): FlightItem {
    return new FlightItem({
      id: resource.id,
      hubId: resource.hubId,
      regionCode: resource.regionCode,
      flightNumber: resource.flightNumber,
      airlineName: resource.airlineName,
      departureAirport: resource.departureAirport,
      arrivalAirport: resource.arrivalAirport,
      flightStatus: resource.flightStatus,
      registeredAt: resource.registeredAt
    });
  }

  toResourceFromEntity(entity: FlightItem): FlightItemResource {
    return {
      id: entity.id,
      hubId: entity.hubId,
      regionCode: entity.regionCode,
      flightNumber: entity.flightNumber,
      airlineName: entity.airlineName,
      departureAirport: entity.departureAirport,
      arrivalAirport: entity.arrivalAirport,
      flightStatus: entity.flightStatus,
      registeredAt: entity.registeredAt
    };
  }

  toEntitiesFromResponse(response: FlightItemsResponse): FlightItem[] {
    return (response?.items ?? [])
      .map(resource => this.toEntityFromResource(resource));
  }
}
