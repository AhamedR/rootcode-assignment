import VehicleDetail from "@/components/templates/VehicleDetail";

const vehicle = {
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
};
function VehicleDetails() {
  return <VehicleDetail vehicle={vehicle} />;
}

export default VehicleDetails;
