import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Your Company Name",
  description: "We build modern software for modern businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-white text-gray-900")}>
        <Header />
        <main className="container mx-auto px-4 sm:px-8 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
