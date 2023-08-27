"use client";

import { useState } from "react";

import Button from "../atoms/Botton";
import notify from "@/helpers/toast";
import IVehicle from "@/models/Vehicle";
import { validateBidding } from "@/helpers/validateForms";
import { useAppDispatch } from "@/redux/hooks";
import { bidVehicle } from "@/features/vehicleSlice";
import { numberFormatter } from "@/helpers/formatter";

interface IBidFormProps {
  vehicle: IVehicle;
}

function BidForm({ vehicle }: IBidFormProps) {
  const [isActive, setIsActive] = useState(false)
  const [biddingAmount, setBiddingAmount] = useState<number>(0)

  const dispatch = useAppDispatch()

  const handleBiddingChange = (event: any) => {
    setIsActive(true)
    setBiddingAmount(event.target.value)
  }

  const handleSubmitBid = (event: React.FormEvent<HTMLFormElement>)  => {
    event.preventDefault()

    if (validateBidding({...vehicle, biddingAmount})) {
      dispatch(bidVehicle({...vehicle, biddingAmount}))
      notify("Bidding successful")
    } else {
      notify("Invalid bidding amount", "danger")
    }
  }

  return ( 
  <form action="#" method="POST" onSubmit={handleSubmitBid}>
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
          placeholder={numberFormatter(vehicle.details.price + 1000)}
          type="number"
          name="bid-amount"
          id="bid-amount"
          min={0}
          onChange={handleBiddingChange}
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <div className="mt-1">
        <Button
          disabled={!isActive}
          type="submit"
          className="block w-full"
        >
          Bid
        </Button>
      </div>
    </div>
  </div>
</form> 
);
}

export default BidForm;