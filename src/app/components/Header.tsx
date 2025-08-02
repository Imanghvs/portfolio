"use client";

import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import LinkButton from "./LinkButton";

const Header = () => {
  const navItems = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          GBEA
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-primary transition"
            >
              {item.label}
            </Link>
          ))}
          <LinkButton size="sm" href="/contact">
            Contact
          </LinkButton>
        </nav>

        {/* Mobile Dropdown Menu */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-36 min-w-[9rem]">
              {navItems.map((item) => (
                <DropdownMenuItem asChild key={item.href} className="px-4 py-2">
                  <Link href={item.href} className="w-full block">
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
