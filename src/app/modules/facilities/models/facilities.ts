import { Instrument } from "../../instruments/models/instruments";

export interface Facility {
    id: number | undefined;
    name: string;
    description:string;
    instrumentList: Instrument[] | undefined;
  }
