import {BaseAssembler} from '../../shared/infrastructure/base-assembler';
import {FlightMonitoringHub} from '../domain/model/flight-monitoring-hub.entity';
import {FlightMonitoringHubResource, FlightMonitoringHubsResponse} from './flight-monitoring-hubs-response';

export class FlightMonitoringHubAssembler
  implements BaseAssembler<FlightMonitoringHub, FlightMonitoringHubResource, FlightMonitoringHubsResponse> {

  toEntityFromResource(resource: FlightMonitoringHubResource): FlightMonitoringHub {
    return new FlightMonitoringHub({
      id: resource.id,
      name: resource.name,
      regionCode: resource.regionCode
    });
  }

  toResourceFromEntity(entity: FlightMonitoringHub): FlightMonitoringHubResource {
    return {
      id: entity.id,
      name: entity.name,
      regionCode: entity.regionCode
    };
  }

  toEntitiesFromResponse(response: FlightMonitoringHubsResponse): FlightMonitoringHub[] {
    return (response?.hubs ?? []).map(resource => this.toEntityFromResource(resource));
  }
}
