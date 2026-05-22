import { Component, input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { TranslatePipe } from '@ngx-translate/core';
import { FlightItem } from '../../../domain/model/flight-item.entity';

@Component({
  selector: 'app-flight-item-summary',
  imports: [CommonModule, MatCardModule, TranslatePipe, DatePipe],
  templateUrl: './flight-item-summary.html',
  styleUrl: './flight-item-summary.css'
})
export class FlightItemSummary {

  readonly flightItem = input.required<FlightItem>();
}
