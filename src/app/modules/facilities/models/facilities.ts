
export interface Facility {
    id: number;
    name: string;
    active: boolean;
    description:string;
  }
  
  export const facilities:Facility[] = [
    {
      id: 1,
      name: 'Phone XL',
      active: true,
      description: "Good Facility"
    },
    {
      id: 2,
      name: 'Phone Mini',
      active: true,
      description: ""
    },
    {
      id: 3,
      name: 'Phone Standard',
      active: false,
      description: "What a good room"
    }
  ];
