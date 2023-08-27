import IVehicle from "@/models/Vehicle";

const validateBidding = ({
  biddingAmount,
  details
}: IVehicle) => {
  if (biddingAmount && biddingAmount < details.price) {
    return false
  }

  return true
}

export {validateBidding}
