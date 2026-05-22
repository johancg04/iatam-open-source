import {BaseEntity} from '../../../shared/domain/model/base-entity';

export class FlightMonitoringHub implements BaseEntity {
  private _id: number;
  private _name: string;
  private _regionCode: string;

  constructor(props: { id: number; name: string; regionCode: string }) {
    this._id = props.id;
    this._name = props.name;
    this._regionCode = props.regionCode;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get regionCode(): string {
    return this._regionCode;
  }

  set regionCode(value: string) {
    this._regionCode = value;
  }
}
