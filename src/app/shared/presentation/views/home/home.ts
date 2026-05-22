import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { TranslatePipe } from '@ngx-translate/core';

import { FlightItemStore } from '../../../../monitoring/application/flight-item.store';
import { FlightItemSummary } from '../../../../monitoring/presentation/components/flight-item-summary/flight-item-summary';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    TranslatePipe,
    FlightItemSummary
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  protected readonly store = inject(FlightItemStore);

  private readonly breakpointObserver = inject(BreakpointObserver);

  protected readonly columns = toSignal(
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .pipe(map(state => state.matches ? 1 : 2)),
    { initialValue: 2 }
  );
}
