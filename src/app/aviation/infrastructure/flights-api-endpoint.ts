import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Flight } from '../domain/model/flight.entity';
import { FlightAssembler } from './flight-assembler';
import { FlightsResponse } from './flights-response';
import { environment } from '../../../environments/environment';

export class FlightsApiEndpoint {

  private readonly assembler: FlightAssembler = new FlightAssembler();

  constructor(private http: HttpClient) {}

  getByAirlineIata(airlineIata: string): Observable<Flight[]> {
    const params = new HttpParams()
      .set('access_key', environment.aviationStackKey)
      .set('airline_iata', airlineIata);

    return this.http.get<FlightsResponse>(`${environment.aviationStackBaseUrl}/flights`, { params }).pipe(
      map(response => this.assembler.toEntitiesFromResponse(response)),
      catchError((error: HttpErrorResponse) => {
        console.error('AviationStack request failed', error.message);
        return of<Flight[]>([]);
      })
    );
  }
}
