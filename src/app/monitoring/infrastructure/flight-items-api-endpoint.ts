import { HttpClient } from '@angular/common/http';
import { BaseApiEndpoint } from '../../shared/infrastructure/base-api-endpoint';
import { FlightItem } from '../domain/model/flight-item.entity';
import { FlightItemResource, FlightItemsResponse } from './flight-items-response';
import { FlightItemAssembler } from './flight-item-assembler';
import { environment } from '../../../environments/environment';

export class FlightItemsApiEndpoint extends BaseApiEndpoint<
  FlightItem,
  FlightItemResource,
  FlightItemsResponse,
  FlightItemAssembler
> {
  constructor(http: HttpClient) {
    super(
      http,
      `${environment.platformProviderBaseUrl}${environment.platformProviderItemsEndpointPath}`,
      new FlightItemAssembler()
    );
  }
}
