import { computed, inject, Injectable, signal } from '@angular/core';
import { MonitoringApi } from '../infrastructure/monitoring-api';
import { FlightItem } from '../domain/model/flight-item.entity';
import { FlightMonitoringHub } from '../domain/model/flight-monitoring-hub.entity';

@Injectable({ providedIn: 'root' })
export class FlightItemStore {

  private readonly monitoringApi = inject(MonitoringApi);

  private readonly _flightItems = signal<FlightItem[]>([]);

  private readonly _hubs = signal<FlightMonitoringHub[]>([]);

  private readonly _loading = signal<boolean>(false);

  readonly flightItems = computed(() => this._flightItems());

  readonly hubs = computed(() => this._hubs());

  readonly loading = computed(() => this._loading());

  readonly isEmpty = computed(() => this._flightItems().length === 0);

  constructor() {
    this.loadHubs();
    this.loadFlightItems();
  }

  loadFlightItems(): void {
    this._loading.set(true);
    this.monitoringApi.getFlightItems().subscribe({
      next: items => {
        this._flightItems.set(items);
        this._loading.set(false);
      },
      error: () => {
        this._flightItems.set([]);
        this._loading.set(false);
      }
    });
  }

  loadHubs(): void {
    this.monitoringApi.getHubs().subscribe({
      next: hubs => this._hubs.set(hubs),
      error: () => this._hubs.set([])
    });
  }

  resolveHubIdByRegionCode(regionCode: string): number {
    return this._hubs().find(hub => hub.regionCode === regionCode)?.id ?? 0;
  }


  createFlightItem(item: FlightItem, onDone?: (created: FlightItem | null) => void): void {
    this._loading.set(true);
    this.monitoringApi.createFlightItem(item).subscribe({
      next: created => {
        this._flightItems.update(items => [...items, created]);
        this._loading.set(false);
        onDone?.(created);
      },
      error: () => {
        this._loading.set(false);
        onDone?.(null);
      }
    });
  }
}
