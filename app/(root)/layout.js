import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dar Benti",
  description: "Maison d'hôtes | Tunisie",
  icons: {
    icon: "/logo.png",
  },
};

export default function Layout({ children }) {
  return <main className="font-work-sans">{children}</main>;
}
