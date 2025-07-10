import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/navbar";

export const metadata = {
  title: "Dar Benti - Chambres",
  description: "Maison d'hôtes | Tunisie",
};

export default function Layout({ children }) {
  return (
    <main className="font-work-sans">
      <Navbar />
      {children}
    </main>
  );
}
