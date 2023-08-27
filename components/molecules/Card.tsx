import IVehicle from "@/models/Vehicle";
import Link from "next/link";

interface ICardProps {
  vehicle: IVehicle;
}

export default function Card({ vehicle }: ICardProps) {
  return (
    <div
      key={vehicle.id}
      className="group relative rounded-md p-4 ring-1 ring-gray-200 bg-gray-50"
    >
      <Link href={"/asd"}>
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
          {vehicle.details.price}
        </p>
      </div>
      <div className="py-2 divide-x divide-blue-950">
        <form action="#" method="POST">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 ">
            <div>
              <label
                htmlFor="bid-amount"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Your Bid
              </label>
              <div className="mt-2.5">
                <input
                  placeholder="100000"
                  type="number"
                  name="bid-amount"
                  id="bid-amount"
                  min={0}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mt-1">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Bid
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
