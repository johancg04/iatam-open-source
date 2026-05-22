import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApi } from '../../shared/infrastructure/base-api';
import { Flight } from '../domain/model/flight.entity';
import { FlightsApiEndpoint } from './flights-api-endpoint';

export const REGION_TO_AIRLINE_IATA: Record<string, string> = {
  LATAM: 'LA',
  NAM:   'AA',
  EUR:   'IB',
  MEA:   'EK',
  APAC:  'SQ'
};

@Injectable({ providedIn: 'root' })
export class AviationApi extends BaseApi {
  private readonly flightsEndpoint: FlightsApiEndpoint;

  constructor(http: HttpClient) {
    super();
    this.flightsEndpoint = new FlightsApiEndpoint(http);
  }

  getFlightsByRegionCode(regionCode: string): Observable<Flight[]> {
    const airlineIata = REGION_TO_AIRLINE_IATA[regionCode] ?? '';
    return this.flightsEndpoint.getByAirlineIata(airlineIata);
  }
}
