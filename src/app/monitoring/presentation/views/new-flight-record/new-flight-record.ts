import { Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

import { FlightItemStore } from '../../../application/flight-item.store';
import { FlightItem } from '../../../domain/model/flight-item.entity';
import { AviationApi } from '../../../../aviation/infrastructure/aviation-api';
import { Flight } from '../../../../aviation/domain/model/flight.entity';

const REGION_CODES = ['NAM', 'LATAM', 'EUR', 'MEA', 'APAC'] as const;

@Component({
  selector: 'app-new-flight-record',
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    TranslatePipe
  ],
  templateUrl: './new-flight-record.html',
  styleUrl: './new-flight-record.css'
})
export class NewFlightRecord {
  protected readonly regionCodes = REGION_CODES;

  protected readonly selectedRegionCode = signal<string>('');

  protected readonly availableFlights = signal<Flight[]>([]);

  protected readonly selectedFlightNumber = signal<string>('');

  protected readonly loadingFlights = signal<boolean>(false);

  protected readonly selectedFlight = computed<Flight | undefined>(() =>
    this.availableFlights().find(flight => flight.flightNumber === this.selectedFlightNumber())
  );

  protected readonly canCreate = computed<boolean>(() => {
    const flight = this.selectedFlight();
    return !!flight && !flight.isCancelled() && !!this.selectedRegionCode();
  });

  private readonly store = inject(FlightItemStore);
  private readonly aviationApi = inject(AviationApi);
  private readonly router = inject(Router);
  private readonly snackBar = inject(MatSnackBar);
  private readonly translate = inject(TranslateService);

  protected onRegionSelected(regionCode: string): void {
    this.selectedRegionCode.set(regionCode);
    this.selectedFlightNumber.set('');
    this.availableFlights.set([]);
    if (!regionCode) return;

    this.loadingFlights.set(true);
    this.aviationApi.getFlightsByRegionCode(regionCode).subscribe({
      next: flights => {
        this.availableFlights.set(flights);
        this.loadingFlights.set(false);
      },
      error: () => {
        this.availableFlights.set([]);
        this.loadingFlights.set(false);
      }
    });
  }

  protected onFlightSelected(flightNumber: string): void {
    this.selectedFlightNumber.set(flightNumber);
  }

  protected create(): void {
    const flight = this.selectedFlight();
    const regionCode = this.selectedRegionCode();
    if (!flight || flight.isCancelled() || !regionCode) {
      this.snackBar.open(
        this.translate.instant('new-flight-record.feedback.cannot-register'),
        this.translate.instant('common.close'),
        { duration: 3000 }
      );
      return;
    }

    const hubId = this.store.resolveHubIdByRegionCode(regionCode);

    const item = new FlightItem({
      id: 0,
      hubId,
      regionCode,
      flightNumber:     flight.flightNumber,
      airlineName:      flight.airlineName,
      departureAirport: flight.departureAirport,
      arrivalAirport:   flight.arrivalAirport,
      flightStatus:     flight.flightStatus,
      registeredAt:     new Date().toISOString()
    });

    this.store.createFlightItem(item, created => {
      if (created) {
        this.snackBar.open(
          this.translate.instant('new-flight-record.feedback.created'),
          this.translate.instant('common.close'),
          { duration: 2500 }
        );
        this.router.navigate(['/home']).then();
      } else {
        this.snackBar.open(
          this.translate.instant('new-flight-record.feedback.create-failed'),
          this.translate.instant('common.close'),
          { duration: 3000 }
        );
      }
    });
  }

  protected cancel(): void {
    this.router.navigate(['/home']).then();
  }
}
