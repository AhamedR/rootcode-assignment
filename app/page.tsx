import CarCatalog from "@/components/templates/CarCatalog";
import 'react-toastify/dist/ReactToastify.min.css'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-10">
      <CarCatalog />
    </main>
  );
}
