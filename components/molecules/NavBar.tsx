"use client";

import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import Button from "../atoms/Botton";
import { viewBidding } from "@/features/vehicleSlice";

function NavBar() {
  const dispatch = useAppDispatch();
  const totalBidding = useAppSelector(
    (state) => state.vehicleSlice.totalBidding
  );

  return (
    <div className="p-10">
      <nav className="border-gray-200 px-2 w-full">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <Link href="/" className="flex">
            CarBid
          </Link>
          <div
            className="md:flex justify-between items-center w-full md:w-auto md:order-1"
            id="mobile-menu-3"
          >
            <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Button
                  onClick={() => {
                    dispatch(viewBidding());
                  }}
                  className="bg-blue-700 text-white block pl-3 pr-4 py-2 text-blue-700 p-0 rounded"
                  aria-current="page"
                >
                  {totalBidding > 0 ? "Your Biddings" : "No Biddings yet!"}
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
