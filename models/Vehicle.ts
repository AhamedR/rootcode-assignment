interface IVehicleDetails {
  currency: string;
  price: number;
  color: string;
  brand: string;
  manufactureYear: string;
  image: string;
  description: string;
}

export default interface IVehicle {
  id: string;
  name: string;
  details: IVehicleDetails;
  biddingAmount?: number;
}
