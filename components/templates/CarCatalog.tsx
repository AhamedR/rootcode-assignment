"use client";

import { useEffect, useState } from "react";

import Card from "../molecules/Card";
import Select, { IItems } from "../atoms/Select";
import Button from "../atoms/Botton";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getVehicles } from "@/features/vehicleSlice";

const products = [
  {
    id: "1",
    name: "T-Cross",
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
    id: "3",
    name: "A3 Saloon",
    details: {
      currency: "LKR",
      price: 8000000,
      color: "#6EBF8B",
      brand: "Audi",
      manufactureYear: "2018",
      image:
        "https://cdn.imagin.studio/getImage?angle=01&billingTag=web&customer=carwow&make=audi&modelFamily=a3&modelVariant=saloon&modelYear=2022&paintDescription=solid---ibis-white+F3F1EF&paintId=76076&tailoring=carwow&width=800&zoomLevel=0&zoomType=fullscreen",
      description: "Premium saloon with the latest tech",
    },
  },
  {
    id: "4",
    name: "Kuga",
    details: {
      currency: "LKR",
      price: 8500000,
      color: "#DADBBD",
      brand: "Ford",
      manufactureYear: "2018",
      image:
        "https://cdn.imagin.studio/getImage?angle=01&billingTag=web&customer=carwow&make=ford&modelFamily=kuga&modelVariant=estate&modelYear=2020&paintDescription=solid---blazer-blue+292F41&paintId=82249&tailoring=carwow&width=800&zoomLevel=0&zoomType=fullscreen",
      description: "Family SUV with hybrid versions",
    },
  },
  {
    id: "5",
    name: "Tiguan",
    details: {
      currency: "LKR",
      price: 9000000,
      color: "#E8F9FD",
      brand: "Volkswagen",
      manufactureYear: "2020",
      image: "",
      description: "Plush, practical five-seat family SUV",
    },
  },
  {
    id: "6",
    name: "Q3",
    details: {
      currency: "LKR",
      price: 9000000,
      color: "#79DAE8",
      brand: "Audi",
      manufactureYear: "2020",
      image:
        "https://cdn.imagin.studio/getImage?angle=01&billingTag=web&customer=carwow&make=audi&modelFamily=q3&modelVariant=estate&modelYear=2021&paintDescription=solid---ibis-white+F3F1EF&paintId=76076&tailoring=carwow&width=800&zoomLevel=0&zoomType=fullscreen",
      description: "A stylish small SUV with plenty of space inside",
    },
  },
  {
    id: "7",
    name: "A4",
    details: {
      currency: "LKR",
      price: 10000000,
      color: "#0AA1DD",
      brand: "Audi",
      manufactureYear: "2015",
      image:
        "https://cdn.imagin.studio/getImage?angle=01&billingTag=web&customer=carwow&make=audi&modelFamily=a4&modelVariant=saloon&modelYear=2020&paintDescription=solid---ibis-white+F3F1EF&paintId=76076&tailoring=carwow&width=800&zoomLevel=0&zoomType=fullscreen",
      description: "Plush saloon is one of the best all-rounders available",
    },
  },
  {
    id: "8",
    name: "CLA",
    details: {
      currency: "LKR",
      price: 10100000,
      color: "#2155CD",
      brand: "Mercedes",
      manufactureYear: "2021",
      image:
        "https://cdn.imagin.studio/getImage?angle=01&billingTag=web&customer=carwow&make=mercedes&modelFamily=cla&modelVariant=saloon&modelYear=2020&paintDescription=solid---polar-white+ffffff&paintId=13990&tailoring=carwow&width=800&zoomLevel=0&zoomType=fullscreen",
      description: "Swoopy four-door coupe gets high-tech features",
    },
  },
  {
    id: "9",
    name: "Tiguan AllSpace",
    details: {
      currency: "LKR",
      price: 11100000,
      color: "#03045E",
      brand: "Volkswagen",
      manufactureYear: "2015",
      image:
        "https://cdn.imagin.studio/getImage?angle=01&billingTag=web&customer=carwow&make=volkswagen&modelFamily=tiguan-allspace&modelVariant=estate&modelYear=2019&paintDescription=solid---pure-white+FFFFFF&paintId=30598&tailoring=carwow&width=800&zoomLevel=0&zoomType=fullscreen",
      description: "An upmarket seven-seater with lots of high-tech kit",
    },
  },
  {
    id: "10",
    name: "TT",
    details: {
      currency: "LKR",
      price: 10100000,
      color: "#00B4D8",
      brand: "Audi",
      manufactureYear: "2018",
      image:
        "https://cdn.imagin.studio/getImage?angle=01&billingTag=web&customer=carwow&make=audi&modelFamily=tt&modelVariant=coupe&modelYear=2014&paintDescription=solid---brilliant-black+121D17&paintId=4232&tailoring=carwow&width=800&zoomLevel=0&zoomType=fullscreen",
      description: "Roomy small SUV with lots of kit",
    },
  },
  {
    id: "11",
    name: "TT Roadster",
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
  {
    id: "12",
    name: "Puma",
    details: {
      currency: "LKR",
      price: 20000000,
      color: "#CAF0F8",
      brand: "Ford",
      manufactureYear: "2021",
      image:
        "https://cdn.imagin.studio/getImage?angle=01&billingTag=web&customer=carwow&make=ford&modelFamily=puma&modelVariant=hatchback&modelYear=2020&paintDescription=solid---blazer-blue+292F41&paintId=82249&tailoring=carwow&width=800&zoomLevel=0&zoomType=fullscreen",
      description: "Roomy small SUV with lots of kit",
    },
  },
  {
    id: "13",
    name: "Q2",
    details: {
      currency: "LKR",
      price: 21000000,
      color: "#19282F",
      brand: "Audi",
      manufactureYear: "2022",
      image:
        "https://cdn.imagin.studio/getImage?angle=01&billingTag=web&customer=carwow&make=audi&modelFamily=q2&modelVariant=estate&modelYear=2018&paintDescription=solid---quantum-grey+949494&paintId=33088&tailoring=carwow&width=800&zoomLevel=0&zoomType=fullscreen",
      description: "Roomy small SUV with lots of kit",
    },
  },
  {
    id: "14",
    name: "T-Roc",
    details: {
      currency: "LKR",
      price: 22000000,
      color: "#B33030",
      brand: "Volkswagen",
      manufactureYear: "2022",
      image:
        "https://cdn.imagin.studio/getImage?angle=01&billingTag=web&customer=carwow&make=volkswagen&modelFamily=t-roc&modelRange=t-roc&modelVariant=od&modelYear=2019&paintDescription=solid---urano-grey+5D5F5E&paintId=92805&tailoring=carwow&width=800&zoomLevel=0&zoomType=fullscreen",
      description: "Roomy small SUV with lots of kit",
    },
  },
  {
    id: "15",
    name: "2 Series Gran Coupe",
    details: {
      currency: "LKR",
      price: 25000000,
      color: "#A1B57D",
      brand: "BMW",
      manufactureYear: "2022",
      image:
        "https://cdn.imagin.studio/getImage?angle=01&billingTag=web&customer=carwow&make=bmw&modelFamily=2-series&modelVariant=saloon&modelYear=2020&paintDescription=solid---jet-black+000000&paintId=38729&tailoring=carwow&width=800&zoomLevel=0&zoomType=fullscreen",
      description: "Four-door coupe with a premium touch",
    },
  },
];

const VEHICLE_CATEGORIES = [
  {
    id: "All",
    label: "All",
  },
  {
    id: "Volkswagen",
    label: "Volkswagen",
  },
  {
    id: "Audi",
    label: "Audi",
  },
  {
    id: "Ford",
    label: "Ford",
  },
  {
    id: "Mercedes",
    label: "Mercedes",
  },
  {
    id: "BMW",
    label: "BMW",
  },
];

export default function CarCatalog() {
  const [page, setPage] = useState(1);
  const [vehicleBrand, setVehicleBrand] = useState("All");

  const dispatch = useAppDispatch();
  const vehicles = useAppSelector((state) => state.vehicleSlice.vehicles);

  const fetchVehicles = () => {
    dispatch(getVehicles({ page, vehicleBrand }));
  };

  useEffect(() => {
    fetchVehicles();
  }, [dispatch]);

  useEffect(() => {
    fetchVehicles();
  }, [page]);

  useEffect(() => {
    fetchVehicles();
  }, [vehicleBrand]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    setPage(page - 1);
  };

  const handleBrandChange = (brand: IItems) => {
    console.log(brand);
    setVehicleBrand(brand?.label);
  };

  return (
    <div>
      <div className="mx-auto px-4 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          All Vehicles
        </h2>
        <Select
          items={VEHICLE_CATEGORIES}
          label="Sort by"
          onChange={handleBrandChange}
        />
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {vehicles &&
            vehicles.map((product) => (
              <Card key={product.id} vehicle={product} />
            ))}
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between">
        <Button disabled={page === 1} onClick={handlePreviousPage}>
          {" "}
          previous
        </Button>
        <Button disabled={vehicles.length < 5} onClick={handleNextPage}>
          {" "}
          next
        </Button>
      </div>
    </div>
  );
}
