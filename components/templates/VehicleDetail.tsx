import IVehicle from "@/models/Vehicle";
import BidForm from "../molecules/BidForm";
import { numberFormatter } from "@/helpers/formatter";

interface ICardProps {
  vehicle: IVehicle;
}

export default function VehicleDetail({ vehicle }: ICardProps) {
  return (
    <div className="bg-white">
      <div className="pt-6">
        <div className="mt-6 object-center max-w-2xl sm:px-6 lg:max-w-7xl lg:gap-x-8 lg:px-8">
          <img
            src={vehicle.details.image || "https://placehold.co/500x200?text=Vehicle image not found"}
            alt={vehicle.name}
            className="h-80 object-center m-auto"
          />
        </div>

        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {vehicle.name}- {vehicle.details.manufactureYear}
            </h1>
            <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              {vehicle.details.brand}
            </h3>
          </div>

          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">vehicle information</h2>
            <p>Price</p>
            <p className="text-3xl tracking-tight text-gray-900">
              {numberFormatter(vehicle.details.price)}
            </p>
            <BidForm vehicle={vehicle} />
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            <div>
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6">
                <p className="text-base text-gray-900 flex align-middle">
                  Color: <span style={{ backgroundColor: `${vehicle.details.color}` }} className={`block w-12 h-5 ml-2 rounded-lg self-center`}/>
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-base text-gray-900">
                  {vehicle.details.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
