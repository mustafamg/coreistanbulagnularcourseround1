import { required, prop, maxLength } from "@rxweb/reactive-form-validators";
import { Instrument } from "../../instruments/models/instruments";

export interface Facility {
  id: number | undefined;
  name: string;
  description: string;
  instrumentList: Instrument[] | undefined;
}

export class FacilityEditModel implements Facility {
  constructor(init?: Partial<FacilityEditModel>) {
    Object.assign(this, init);
  }

  @prop()
  id: number | undefined;
  @required()
  @maxLength({ value: 100 })
  name: string = "";
  @prop()
  description: string = "";
  instrumentList: Instrument[] | undefined = undefined;
}
