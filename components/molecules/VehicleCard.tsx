import IVehicle from "@/models/Vehicle";
import Link from "next/link";
import BidForm from "./BidForm";
import { numberFormatter } from "@/helpers/formatter";

interface ICardProps {
  vehicle: IVehicle;
}

export default function Card({ vehicle }: ICardProps) {
  return (
    <div
      key={vehicle.id}
      className="group relative rounded-md p-4 ring-1 ring-gray-200 bg-gray-50"
    >
      <Link href={`/${vehicle.id}`}>
        <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 ">
          <img
            src={
              vehicle.details.image ||
              "https://placehold.co/200x125?text=Image not found"
            }
            alt={vehicle.name}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <span aria-hidden="true" className="" />
              {vehicle.name}
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              {vehicle.details.color}
            </p>
          </div>
          <div>
            <p className="mt-1 text-sm text-gray-500">
              {vehicle.details.brand}
            </p>
            <p className="mt-1 text-sm text-gray-500">
              {vehicle.details.manufactureYear}
            </p>
          </div>
        </div>
      </Link>
      <div className="py-2">
        <p>Final Bid</p>
        <p className="text-sm font-medium text-gray-900">
          {numberFormatter(vehicle.details.price)}
        </p>
      </div>
      <div className="py-2 divide-x divide-blue-950">
        <BidForm vehicle={vehicle}/>
      </div>
    </div>
  );
}
