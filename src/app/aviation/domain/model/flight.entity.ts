export class Flight {
  private _flightNumber: string;
  private _airlineName: string;
  private _departureAirport: string;
  private _arrivalAirport: string;
  private _flightStatus: string;

  constructor(props: {
    flightNumber: string;
    airlineName: string;
    departureAirport: string;
    arrivalAirport: string;
    flightStatus: string;
  }) {
    this._flightNumber = props.flightNumber;
    this._airlineName = props.airlineName;
    this._departureAirport = props.departureAirport;
    this._arrivalAirport = props.arrivalAirport;
    this._flightStatus = props.flightStatus;
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

  isCancelled(): boolean {
    return this._flightStatus?.toLowerCase() === 'cancelled';
  }
}
