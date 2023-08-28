"use client";

import { useEffect, useState } from "react";

import { useAppSelector } from "@/redux/hooks";
import { useParams } from "next/navigation";

import VehicleDetail from "@/components/templates/VehicleDetail";
import IVehicle from "@/models/Vehicle";

function VehicleDetails() {
  const {vehicleId} = useParams();
  const [selectedVehicle, setSelectedVehicle] = useState<IVehicle>();
  const [isValid, setsValid] = useState(true);
  const vehicles = useAppSelector((state) => state.vehicleSlice.vehicles);

  useEffect(() => {
    vehicleId && findVehicle(vehicleId.toString());
  }, [vehicleId]);

  const findVehicle = (id: string) => {
    const searchIndex = vehicles.findIndex((vehicle) => vehicle.id === id);

    if (searchIndex >= 0) {
      setSelectedVehicle(vehicles[searchIndex]);
    } else {
      setsValid(false);
    }
  };

  if (isValid && selectedVehicle) {
    return <VehicleDetail vehicle={selectedVehicle} />;
  } else {
    return <p className="h-full ">Invalid Vehicle</p>;
  }
}

export default VehicleDetails;
