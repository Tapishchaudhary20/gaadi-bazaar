import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
export const metadata: Metadata = { title: "Gaadi Bazaar — Buy and sell used cars in India", description: "Find trusted pre-owned cars from sellers across India." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><Navbar />{children}</body></html>; }
