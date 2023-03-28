import { Facility } from "../../facilities/models/facilities";

export interface Instrument {
    id: number | undefined;
    name: string;
    description:string;
    facility: Facility | undefined;
    facilityId: number;
  } 
