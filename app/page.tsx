import NavBar from "@/components/molecules/NavBar";
import Biddings from "@/components/templates/Biddings";
import CarCatalog from "@/components/templates/CarCatalog";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  p-10">
      <NavBar />
      <CarCatalog />
      <Biddings />
    </main>
  );
}
