import { Instrument } from "../../instruments/models/instruments";

export interface Facility {
    id: number;
    name: string;
    active: boolean;
    description:string;
    instrumentList: Instrument[];
  }
  
  export const facilities:Facility[] = [
    {
      id: 1,
      name: 'Phone XL',
      active: true,
      description: "Good Facility",
      instrumentList: []
    },
    {
      id: 2,
      name: 'Phone Mini',
      active: true,
      description: "",
      instrumentList: []
    },
    {
      id: 3,
      name: 'Phone Standard',
      active: false,
      description: "What a good room",
      instrumentList: []
    }
  ];
