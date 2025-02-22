import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  console.log("Rendering Layout Component"); // Debug Log

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
