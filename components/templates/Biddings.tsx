"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";

const products = [
  {
    id: "1",
    name: "T-Cross",
    biddingAmount: 20000000,
    details: {
      currency: "LKR",
      price: 20000000,
      color: "#151D3B",
      brand: "Volkswagen",
      manufactureYear: "2018",
      image:
        "https://cdn.imagin.studio/getImage?angle=01&billingTag=web&customer=carwow&make=volkswagen&modelFamily=t-cross&modelVariant=estate&modelYear=2019&paintDescription=solid---pure-white+FFFFFF&paintId=30598&tailoring=carwow&width=800&zoomLevel=0&zoomType=fullscreen",
      description: "Roomy small SUV with lots of kit",
    },
  },
  {
    id: "2",
    name: "Taigo",
    biddingAmount: 20000000,
    details: {
      currency: "LKR",
      price: 10000000,
      color: "#D82148",
      brand: "Volkswagen",
      manufactureYear: "2018",
      image: "",
      description: "Compact crossover coupe with a comfortable setup",
    },
  },
  {
    id: "11",
    name: "TT Roadster",
    biddingAmount: 20000000,
    details: {
      currency: "LKR",
      price: 10200000,
      color: "#90E0EF",
      brand: "Audi",
      manufactureYear: "2021",
      image:
        "https://cdn.imagin.studio/getImage?angle=01&billingTag=web&customer=carwow&make=audi&modelFamily=tt&modelVariant=roadster&modelYear=2006&paintDescription=pearl---glacier-blue+&paintId=47471&tailoring=carwow&width=800&zoomLevel=0&zoomType=fullscreen",
      description: "Roomy small SUV with lots of kit",
    },
  },
];
export default function Biddings() {
  const [open, setOpen] = useState(true);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className="relative w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    type="button"
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-5">
                    Your Biddings
                  </h2>
                  <ul role="list" className="divide-y divide-gray-100 w-full">
                    {products.map((product) => (
                      <li
                        key={product.id}
                        className="flex justify-between gap-x-6 py-5"
                      >
                        <div className="flex min-w-0 gap-x-4">
                          <img
                            className="h-20 flex-none bg-gray-50"
                            src={
                              product.details.image ||
                              "https://placehold.co/200x125?text=Image not found"
                            }
                            alt=""
                          />
                          <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">
                              {product.name}
                            </p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                              {product.details.brand}
                            </p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                              {product.details.manufactureYear}
                            </p>
                          </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                          <p className="text-sm leading-6 text-gray-900">
                            {product.biddingAmount}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
