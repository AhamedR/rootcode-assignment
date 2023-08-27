"use client";

import { useEffect, useState } from "react";

import Card from "../molecules/VehicleCard";
import Select, { IItems } from "../atoms/Select";
import Button from "../atoms/Botton";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getVehicles } from "@/features/vehicleSlice";

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
          previous
        </Button>
        <Button disabled={vehicles.length < 5} onClick={handleNextPage}>
          next
        </Button>
      </div>
    </div>
  );
}
