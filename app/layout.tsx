import Providers from "@/redux/provider";
import { ToastContainer } from "react-toastify";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

import NavBar from "@/components/molecules/NavBar";
import Biddings from "@/components/templates/Biddings";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CarBid",
  description: "Vehicle bidding app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <NavBar />
          <ToastContainer />
          <Biddings />
          {children}
        </Providers>
      </body>
    </html>
  );
}
