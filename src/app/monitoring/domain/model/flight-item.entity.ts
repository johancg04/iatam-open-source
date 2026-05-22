import {BaseEntity} from '../../../shared/domain/model/base-entity';

export class FlightItem implements BaseEntity {
  private _id: number;
  private _hubId: number;
  private _regionCode: string;
  private _flightNumber: string;
  private _airlineName: string;
  private _departureAirport: string;
  private _arrivalAirport: string;
  private _flightStatus: string;
  private _registeredAt: string;

  constructor(props: {
    id: number;
    hubId: number;
    regionCode: string;
    flightNumber: string;
    airlineName: string;
    departureAirport: string;
    arrivalAirport: string;
    flightStatus: string;
    registeredAt: string;
  }) {
    this._id = props.id;
    this._hubId = props.hubId;
    this._regionCode = props.regionCode;
    this._flightNumber = props.flightNumber;
    this._airlineName = props.airlineName;
    this._departureAirport = props.departureAirport;
    this._arrivalAirport = props.arrivalAirport;
    this._flightStatus = props.flightStatus;
    this._registeredAt = props.registeredAt;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get hubId(): number {
    return this._hubId;
  }

  set hubId(value: number) {
    this._hubId = value;
  }

  get regionCode(): string {
    return this._regionCode;
  }

  set regionCode(value: string) {
    this._regionCode = value;
  }

  get flightNumber(): string {
    return this._flightNumber;
  }

  set flightNumber(value: string) {
    this._flightNumber = value;
  }

  get airlineName(): string {
    return this._airlineName;
  }

  set airlineName(value: string) {
    this._airlineName = value;
  }

  get departureAirport(): string {
    return this._departureAirport;
  }

  set departureAirport(value: string) {
    this._departureAirport = value;
  }

  get arrivalAirport(): string {
    return this._arrivalAirport;
  }

  set arrivalAirport(value: string) {
    this._arrivalAirport = value;
  }

  get flightStatus(): string {
    return this._flightStatus;
  }

  set flightStatus(value: string) {
    this._flightStatus = value;
  }

  get registeredAt(): string {
    return this._registeredAt;
  }

  set registeredAt(value: string) {
    this._registeredAt = value;
  }
}
