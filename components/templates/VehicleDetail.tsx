import IVehicle from "@/models/Vehicle";

interface ICardProps {
  vehicle: IVehicle;
}

const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function VehicleDetail({ vehicle }: ICardProps) {
  return (
    <div className="bg-white">
      <div className="pt-6">
        <div className="mt-6 object-center max-w-2xl sm:px-6 lg:max-w-7xl lg:gap-x-8 lg:px-8">
          <img
            src={vehicle.details.image}
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
            <p>Current Bid</p>
            <p className="text-3xl tracking-tight text-gray-900">
              {vehicle.details.price}
            </p>

            <form className="mt-10">
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
              <button
                type="submit"
                className="mt-1 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Bid
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            <div>
              <h3 className="sr-only">Description</h3>

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
